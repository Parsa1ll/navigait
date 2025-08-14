import React, { useState, useRef, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';
import { Mic, MicOff, Send, Navigation, MapPin, Clock, AlertTriangle } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  metadata?: {
    eta?: string;
    distance?: string;
    traffic?: 'light' | 'moderate' | 'heavy';
    routeUpdate?: boolean;
  };
}

interface ConversationInterfaceProps {
  onCommand?: (command: string) => void;
  tripContext?: {
    origin?: string;
    destination?: string;
    eta?: string;
    distance?: string;
    traffic?: string;
  };
}

const ConversationInterface: React.FC<ConversationInterfaceProps> = ({ 
  onCommand, 
  tripContext 
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Hi! I'm your AI navigation assistant. I can help you with directions, find alternate routes, locate nearby places, and provide real-time traffic updates. How can I help you today?",
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    onCommand?.(inputValue);

    // Simulate AI response
    setTimeout(() => {
      const response = generateAIResponse(inputValue);
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  const generateAIResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase();
    
    let content = '';
    let metadata: Message['metadata'] = {};

    if (input.includes('traffic') || input.includes('faster') || input.includes('route')) {
      content = "I've found a faster route that avoids heavy traffic on I-95. This alternate route will save you about 8 minutes. Would you like me to update your navigation?";
      metadata = {
        eta: '12 min',
        distance: '3.2 mi',
        traffic: 'moderate',
        routeUpdate: true
      };
    } else if (input.includes('gas') || input.includes('fuel')) {
      content = "I found 3 gas stations within 0.5 miles of your route. Shell station on Main St has the best prices at $3.45/gal. Should I add it as a stop?";
      metadata = {
        eta: '+3 min',
        distance: '0.3 mi detour'
      };
    } else if (input.includes('restaurant') || input.includes('food') || input.includes('eat')) {
      content = "There's a highly-rated Italian restaurant called 'Bella Vista' just 2 minutes off your route. They're open until 10 PM. Would you like directions?";
      metadata = {
        eta: '+5 min',
        distance: '0.2 mi detour'
      };
    } else if (input.includes('eta') || input.includes('time') || input.includes('arrive')) {
      content = "Based on current traffic conditions, you'll arrive at your destination in approximately 15 minutes. There's moderate traffic ahead, but I'm monitoring for faster alternatives.";
      metadata = {
        eta: '15 min',
        distance: '4.1 mi',
        traffic: 'moderate'
      };
    } else {
      content = "I understand you're looking for navigation assistance. Could you be more specific? I can help with routes, traffic updates, finding nearby places, or changing your destination.";
    }

    return {
      id: Date.now().toString(),
      type: 'assistant',
      content,
      timestamp: new Date(),
      metadata
    };
  };

  const toggleVoice = () => {
    setIsListening(!isListening);
    // Voice functionality would be implemented here
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getTrafficColor = (traffic?: string) => {
    switch (traffic) {
      case 'light': return 'bg-nav-secondary text-nav-secondary';
      case 'moderate': return 'bg-nav-warning text-background';
      case 'heavy': return 'bg-nav-danger text-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className={`fixed bottom-4 left-4 right-4 transition-all duration-300 ${
      isMinimized ? 'h-16' : 'h-80'
    } max-w-md mx-auto md:max-w-lg`}>
      <Card className="h-full bg-nav-surface/95 backdrop-blur-lg border-border shadow-elevated">
        {/* Header */}
        <div 
          className="p-4 border-b border-border cursor-pointer flex items-center justify-between"
          onClick={() => setIsMinimized(!isMinimized)}
        >
          <div className="flex items-center space-x-2">
            <Navigation className="w-5 h-5 text-nav-primary" />
            <span className="font-medium text-foreground">AI Navigator</span>
          </div>
          {tripContext && (
            <div className="flex items-center space-x-2 text-sm">
              <Badge variant="secondary" className="text-xs">
                <Clock className="w-3 h-3 mr-1" />
                {tripContext.eta || '-- min'}
              </Badge>
              {tripContext.traffic && (
                <Badge className={`text-xs ${getTrafficColor(tripContext.traffic)}`}>
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  {tripContext.traffic}
                </Badge>
              )}
            </div>
          )}
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <ScrollArea className="flex-1 p-4 h-48">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.type === 'user'
                          ? 'bg-gradient-primary text-primary-foreground'
                          : 'bg-nav-elevated text-foreground'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      {message.metadata && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {message.metadata.eta && (
                            <Badge variant="outline" className="text-xs">
                              <Clock className="w-3 h-3 mr-1" />
                              {message.metadata.eta}
                            </Badge>
                          )}
                          {message.metadata.distance && (
                            <Badge variant="outline" className="text-xs">
                              <MapPin className="w-3 h-3 mr-1" />
                              {message.metadata.distance}
                            </Badge>
                          )}
                          {message.metadata.traffic && (
                            <Badge className={`text-xs ${getTrafficColor(message.metadata.traffic)}`}>
                              <AlertTriangle className="w-3 h-3 mr-1" />
                              {message.metadata.traffic}
                            </Badge>
                          )}
                        </div>
                      )}
                      <span className="text-xs opacity-70 block mt-1">
                        {formatTime(message.timestamp)}
                      </span>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleVoice}
                  className={`${
                    isListening 
                      ? 'bg-nav-danger text-foreground animate-pulse-slow' 
                      : 'hover:bg-nav-elevated'
                  }`}
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </Button>
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about routes, traffic, or nearby places..."
                  className="flex-1 bg-nav-elevated border-border"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-gradient-primary text-primary-foreground"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default ConversationInterface;