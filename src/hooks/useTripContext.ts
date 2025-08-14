import { useState, useCallback, useEffect } from 'react';

interface TripContext {
  origin: string;
  destination: string;
  eta: string;
  distance: string;
  traffic: 'light' | 'moderate' | 'heavy';
  currentSpeed?: string;
  nextTurn?: string;
  turnDistance?: string;
  isActive: boolean;
  routeHistory: string[];
  preferences: {
    avoidTolls: boolean;
    avoidHighways: boolean;
    fuelType: 'gas' | 'electric' | 'hybrid';
  };
}

interface TripUpdate {
  eta?: string;
  distance?: string;
  traffic?: 'light' | 'moderate' | 'heavy';
  currentSpeed?: string;
  nextTurn?: string;
  turnDistance?: string;
}

export const useTripContext = () => {
  const [tripContext, setTripContext] = useState<TripContext>({
    origin: 'Current Location',
    destination: 'Times Square, NYC',
    eta: '15 min',
    distance: '4.2 mi',
    traffic: 'moderate',
    currentSpeed: '25 mph',
    nextTurn: 'Turn right on Broadway',
    turnDistance: '0.3 mi',
    isActive: true,
    routeHistory: ['Home → Times Square'],
    preferences: {
      avoidTolls: false,
      avoidHighways: false,
      fuelType: 'gas'
    }
  });

  // Simulate real-time updates
  useEffect(() => {
    if (!tripContext.isActive) return;

    const interval = setInterval(() => {
      setTripContext(prev => {
        // Simulate traffic changes
        const trafficStates: Array<'light' | 'moderate' | 'heavy'> = ['light', 'moderate', 'heavy'];
        const randomTraffic = trafficStates[Math.floor(Math.random() * trafficStates.length)];
        
        // Simulate ETA changes based on traffic
        let baseETA = 15;
        if (randomTraffic === 'heavy') baseETA += 5;
        if (randomTraffic === 'light') baseETA -= 2;
        
        // Add some randomness
        const etaVariation = Math.floor(Math.random() * 3) - 1;
        const newETA = Math.max(1, baseETA + etaVariation);

        return {
          ...prev,
          eta: `${newETA} min`,
          traffic: randomTraffic,
          currentSpeed: `${Math.floor(Math.random() * 20) + 20} mph`,
        };
      });
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, [tripContext.isActive]);

  const startTrip = useCallback((origin: string, destination: string) => {
    setTripContext(prev => ({
      ...prev,
      origin,
      destination,
      isActive: true,
      routeHistory: [...prev.routeHistory, `${origin} → ${destination}`]
    }));
  }, []);

  const updateTrip = useCallback((updates: TripUpdate) => {
    setTripContext(prev => ({
      ...prev,
      ...updates
    }));
  }, []);

  const addStop = useCallback((stop: string) => {
    setTripContext(prev => ({
      ...prev,
      destination: `${prev.destination} (via ${stop})`,
      routeHistory: [...prev.routeHistory, `Added stop: ${stop}`]
    }));
  }, []);

  const changeDestination = useCallback((newDestination: string) => {
    setTripContext(prev => ({
      ...prev,
      destination: newDestination,
      routeHistory: [...prev.routeHistory, `Changed destination to: ${newDestination}`]
    }));
  }, []);

  const findAlternateRoute = useCallback(() => {
    setTripContext(prev => {
      const currentETA = parseInt(prev.eta);
      const alternateETA = Math.max(1, currentETA - Math.floor(Math.random() * 5) - 2);
      
      return {
        ...prev,
        eta: `${alternateETA} min`,
        traffic: 'light',
        routeHistory: [...prev.routeHistory, 'Switched to alternate route']
      };
    });
  }, []);

  const endTrip = useCallback(() => {
    setTripContext(prev => ({
      ...prev,
      isActive: false,
      routeHistory: [...prev.routeHistory, 'Trip completed']
    }));
  }, []);

  const updatePreferences = useCallback((preferences: Partial<TripContext['preferences']>) => {
    setTripContext(prev => ({
      ...prev,
      preferences: { ...prev.preferences, ...preferences }
    }));
  }, []);

  return {
    tripContext,
    startTrip,
    updateTrip,
    addStop,
    changeDestination,
    findAlternateRoute,
    endTrip,
    updatePreferences
  };
};