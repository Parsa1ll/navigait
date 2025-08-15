import React, { useState } from 'react';
import NavigationMap from '@/components/NavigationMap';
import ConversationInterface from '@/components/ConversationInterface';
import TripStatusBar from '@/components/TripStatusBar';
import Navbar from '@/components/Navbar';
import { useTripContext } from '@/hooks/useTripContext';
import { useToast } from '@/hooks/use-toast';
import { apiService } from '@/services/api';
import { Button } from '@/components/ui/button';

const Navigator = () => {
  const { 
    tripContext, 
    updateTrip, 
    addStop, 
    changeDestination, 
    findAlternateRoute 
  } = useTripContext();
  const { toast } = useToast();
  const [backendStatus, setBackendStatus] = useState<string>('idle');

  const handleCommand = (command: string) => {
    const lowerCommand = command.toLowerCase();
    
    if (lowerCommand.includes('alternate') || lowerCommand.includes('faster')) {
      findAlternateRoute();
      toast({
        title: "Route Updated",
        description: "Found a faster route avoiding heavy traffic",
      });
    } else if (lowerCommand.includes('gas') || lowerCommand.includes('fuel')) {
      addStop('Shell Gas Station');
      toast({
        title: "Stop Added",
        description: "Shell station added to your route",
      });
    } else if (lowerCommand.includes('restaurant') || lowerCommand.includes('food')) {
      addStop('Bella Vista Restaurant');
      toast({
        title: "Stop Added",
        description: "Restaurant added to your route",
      });
    }
  };

  const handleMapReady = (map: any) => {
    console.log('Map initialized:', map);
  };

  const handleRecenter = () => {
    toast({
      title: "Map Recentered",
      description: "View centered on your current location",
    });
  };

  const handleAlternateRoute = () => {
    findAlternateRoute();
    toast({
      title: "Alternate Route",
      description: "Calculating fastest available route",
    });
  };

  const handleEmergency = () => {
    toast({
      title: "Emergency Services",
      description: "Emergency calling feature would be activated",
      variant: "destructive",
    });
  };

  const testBackendConnection = async () => {
    setBackendStatus('testing');
    try {
      const response = await apiService.healthCheck();
      if (response.success) {
        setBackendStatus('connected');
        toast({
          title: "Backend Connected!",
          description: "Successfully connected to NavigAIt backend",
        });
      } else {
        setBackendStatus('error');
        toast({
          title: "Backend Error",
          description: "Failed to connect to backend",
          variant: "destructive",
        });
      }
    } catch (error) {
      setBackendStatus('error');
      toast({
        title: "Backend Error",
        description: "Network error connecting to backend",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-background">
      <Navbar />
      {/* Main Navigation Interface */}
      <div className="relative w-full h-screen overflow-hidden pt-16">
        {/* Background Map */}
        <NavigationMap onMapReady={handleMapReady} />
        
        {/* Trip Status Bar */}
        <TripStatusBar 
          tripData={tripContext}
          onRecenter={handleRecenter}
          onAlternateRoute={handleAlternateRoute}
          onEmergency={handleEmergency}
        />
        
        {/* Backend Test Button */}
        <div className="absolute top-20 right-4 z-50">
          <Button
            onClick={testBackendConnection}
            disabled={backendStatus === 'testing'}
            variant={backendStatus === 'connected' ? 'default' : 'outline'}
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            {backendStatus === 'testing' ? 'Testing...' : 
             backendStatus === 'connected' ? '✅ Backend' : '🔗 Test Backend'}
          </Button>
        </div>
        
        {/* Conversation Interface */}
        <ConversationInterface 
          onCommand={handleCommand}
          tripContext={{
            origin: tripContext.origin,
            destination: tripContext.destination,
            eta: tripContext.eta,
            distance: tripContext.distance,
            traffic: tripContext.traffic
          }}
        />
      </div>
    </div>
  );
};

export default Navigator;