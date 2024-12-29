import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/Tabs';
import FacebookIntegration from './FacebookIntegration';
import GoogleAnalytics from './GoogleAnalytics';
import PixelTracking from './PixelTracking';

const Integrations = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Integrations</h1>
      </div>

      <Tabs defaultValue="facebook" className="w-full">
        <TabsList>
          <TabsTrigger value="facebook">Facebook</TabsTrigger>
          <TabsTrigger value="google">Google Analytics</TabsTrigger>
          <TabsTrigger value="pixel">Pixel Tracking</TabsTrigger>
        </TabsList>

        <TabsContent value="facebook">
          <FacebookIntegration />
        </TabsContent>

        <TabsContent value="google">
          <GoogleAnalytics />
        </TabsContent>

        <TabsContent value="pixel">
          <PixelTracking />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Integrations;