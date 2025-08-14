import React from 'react';
import NavigationMap from '@/components/NavigationMap';
import ConversationInterface from '@/components/ConversationInterface';
import TripStatusBar from '@/components/TripStatusBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useTripContext } from '@/hooks/useTripContext';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { 
    tripContext, 
    updateTrip, 
    addStop, 
    changeDestination, 
    findAlternateRoute 
  } = useTripContext();
  const { toast } = useToast();

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

  return (
    <div className="relative w-full min-h-screen bg-background">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Navigation Interface */}
      <div className="relative w-full h-[calc(100vh-4rem)] mt-16 overflow-hidden">
        {/* Background Map */}
        <NavigationMap onMapReady={handleMapReady} />
        
        {/* Trip Status Bar */}
        <TripStatusBar 
          tripData={tripContext}
          onRecenter={handleRecenter}
          onAlternateRoute={handleAlternateRoute}
          onEmergency={handleEmergency}
        />
        
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
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
