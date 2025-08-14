import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';

interface NavigationMapProps {
  onMapReady?: (map: mapboxgl.Map) => void;
}

const NavigationMap: React.FC<NavigationMapProps> = ({ onMapReady }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !apiKey) return;

    try {
      mapboxgl.accessToken = apiKey;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/navigation-night-v1',
        zoom: 12,
        center: [-74.006, 40.7128], // New York City
        pitch: 45,
        bearing: 0,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add location control
      map.current.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true,
          showUserHeading: true
        }),
        'top-right'
      );

      map.current.on('load', () => {
        setIsMapInitialized(true);
        onMapReady?.(map.current!);
        
        // Add sample route
        addSampleRoute();
      });

    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  const addSampleRoute = () => {
    if (!map.current) return;

    // Sample route coordinates
    const route = {
      'type': 'Feature',
      'properties': {},
      'geometry': {
        'type': 'LineString',
        'coordinates': [
          [-74.006, 40.7128],
          [-74.001, 40.7180],
          [-73.995, 40.7220],
          [-73.990, 40.7280]
        ]
      }
    };

    map.current.addSource('route', {
      'type': 'geojson',
      'data': route as any
    });

    map.current.addLayer({
      'id': 'route',
      'type': 'line',
      'source': 'route',
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'paint': {
        'line-color': 'hsl(200, 100%, 50%)',
        'line-width': 4,
        'line-opacity': 0.8
      }
    });

    // Add markers
    new mapboxgl.Marker({ color: 'hsl(160, 80%, 45%)' })
      .setLngLat([-74.006, 40.7128])
      .addTo(map.current);

    new mapboxgl.Marker({ color: 'hsl(0, 75%, 55%)' })
      .setLngLat([-73.990, 40.7280])
      .addTo(map.current);
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!apiKey) {
    return (
      <div className="relative w-full h-screen bg-nav-surface flex items-center justify-center">
        <Card className="p-6 max-w-md w-full mx-4 bg-nav-elevated border-border shadow-elevated">
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-foreground mb-2">Mapbox API Key Required</h2>
              <p className="text-sm text-muted-foreground">
                Enter your Mapbox public token to initialize the navigation map.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Get your token at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
              </p>
            </div>
            <Input
              type="text"
              placeholder="pk.eyJ1IjoibXl1c2VybmFtZSIsImEiOiJjbGl..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="font-mono text-sm"
            />
            <Button 
              onClick={initializeMap}
              disabled={!apiKey}
              className="w-full bg-gradient-primary text-primary-foreground font-medium"
            >
              Initialize Map
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen">
      <div ref={mapContainer} className="absolute inset-0" />
      {!isMapInitialized && (
        <div className="absolute inset-0 bg-nav-surface flex items-center justify-center">
          <div className="animate-pulse-slow">
            <div className="w-12 h-12 rounded-full bg-gradient-primary"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationMap;