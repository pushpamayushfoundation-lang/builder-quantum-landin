import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Image, Video, Users } from "lucide-react";

export default function Gallery() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-brand-600 to-brand-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Gallery
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Explore our workshops, student achievements, and learning moments
          </p>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <Camera className="w-24 h-24 text-brand-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Gallery Coming Soon
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're currently organizing our collection of student work, workshop photos, 
              and success stories. This page will showcase the amazing projects and 
              achievements of our Ayush Foundation community.
            </p>
          </div>

          {/* Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Image className="w-12 h-12 text-brand-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Student Projects</h3>
                <p className="text-gray-600">3D printed creations, marketing campaigns, and innovative solutions</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Video className="w-12 h-12 text-brand-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Workshop Videos</h3>
                <p className="text-gray-600">Behind-the-scenes footage of our hands-on learning sessions</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-brand-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Success Stories</h3>
                <p className="text-gray-600">Testimonials and achievements from our amazing students</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-gray-600 mb-6">
              Want to be featured in our gallery? Share your projects and achievements with us!
            </p>
            <Button className="bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800">
              Share Your Work
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
