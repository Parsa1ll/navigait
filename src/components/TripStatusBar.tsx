import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Navigation, 
  Clock, 
  MapPin, 
  AlertTriangle, 
  Zap, 
  RotateCcw,
  Phone,
  Settings
} from 'lucide-react';

interface TripStatusBarProps {
  tripData?: {
    origin: string;
    destination: string;
    eta: string;
    distance: string;
    traffic: 'light' | 'moderate' | 'heavy';
    currentSpeed?: string;
    nextTurn?: string;
    turnDistance?: string;
  };
  onRecenter?: () => void;
  onAlternateRoute?: () => void;
  onEmergency?: () => void;
}

const TripStatusBar: React.FC<TripStatusBarProps> = ({
  tripData = {
    origin: 'Current Location',
    destination: 'Times Square, NYC',
    eta: '15 min',
    distance: '4.2 mi',
    traffic: 'moderate',
    currentSpeed: '25 mph',
    nextTurn: 'Turn right on Broadway',
    turnDistance: '0.3 mi'
  },
  onRecenter,
  onAlternateRoute,
  onEmergency
}) => {
  const getTrafficColor = (traffic: string) => {
    switch (traffic) {
      case 'light': return 'text-nav-secondary';
      case 'moderate': return 'text-nav-warning';
      case 'heavy': return 'text-nav-danger';
      default: return 'text-muted-foreground';
    }
  };

  const getTrafficBadgeColor = (traffic: string) => {
    switch (traffic) {
      case 'light': return 'bg-nav-secondary/20 text-nav-secondary border-nav-secondary/30';
      case 'moderate': return 'bg-nav-warning/20 text-nav-warning border-nav-warning/30';
      case 'heavy': return 'bg-nav-danger/20 text-nav-danger border-nav-danger/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  return (
    <div className="fixed top-4 left-4 right-4 z-10 max-w-4xl mx-auto">
      <Card className="bg-nav-surface/95 backdrop-blur-lg border-border shadow-elevated">
        <div className="p-4">
          {/* Main Trip Info */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <Navigation className="w-6 h-6 text-nav-primary" />
              <div>
                <h2 className="font-semibold text-foreground text-lg">
                  {tripData.destination}
                </h2>
                <p className="text-sm text-muted-foreground">
                  from {tripData.origin}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-nav-primary">
                {tripData.eta}
              </div>
              <div className="text-sm text-muted-foreground">
                {tripData.distance}
              </div>
            </div>
          </div>

          {/* Status Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Traffic Status */}
              <Badge className={getTrafficBadgeColor(tripData.traffic)}>
                <AlertTriangle className="w-3 h-3 mr-1" />
                {tripData.traffic} traffic
              </Badge>

              {/* Current Speed */}
              {tripData.currentSpeed && (
                <Badge variant="outline">
                  <Zap className="w-3 h-3 mr-1" />
                  {tripData.currentSpeed}
                </Badge>
              )}

              {/* Next Turn */}
              {tripData.nextTurn && (
                <div className="hidden md:flex items-center text-sm text-foreground">
                  <MapPin className="w-4 h-4 mr-1 text-nav-secondary" />
                  <span className="mr-2">{tripData.nextTurn}</span>
                  <span className="text-muted-foreground">in {tripData.turnDistance}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onRecenter}
                className="hover:bg-nav-elevated"
              >
                <RotateCcw className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Recenter</span>
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={onAlternateRoute}
                className="hover:bg-nav-elevated text-nav-secondary"
              >
                <Navigation className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Alt Route</span>
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={onEmergency}
                className="hover:bg-nav-danger/20 text-nav-danger"
              >
                <Phone className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="hover:bg-nav-elevated"
              >
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Next Turn Mobile */}
          {tripData.nextTurn && (
            <div className="md:hidden mt-3 p-2 rounded-lg bg-nav-elevated">
              <div className="flex items-center text-sm">
                <MapPin className="w-4 h-4 mr-2 text-nav-secondary" />
                <span className="flex-1">{tripData.nextTurn}</span>
                <span className="text-muted-foreground ml-2">in {tripData.turnDistance}</span>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default TripStatusBar;