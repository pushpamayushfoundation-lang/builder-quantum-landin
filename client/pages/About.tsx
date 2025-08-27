import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Award, BookOpen, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-brand-600 to-brand-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Ayush Foundation
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Bridging the gap between traditional education and modern industry
            requirements
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <Heart className="w-16 h-16 text-brand-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <blockquote className="text-2xl text-gray-700 italic font-light leading-relaxed">
              "Ayush Foundation is dedicated to bridging the gap between
              traditional education and modern skills by preparing students for
              the real world."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Target className="w-16 h-16 text-brand-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Full Story Coming Soon
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're preparing a comprehensive overview of our journey, team, and
              vision. Stay tuned for the complete Ayush Foundation story.
            </p>
          </div>

          {/* Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-brand-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Founder's Story
                </h3>
                <p className="text-gray-600">
                  Learn about Ayush's journey and vision for transforming
                  education
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-12 h-12 text-brand-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Our Approach
                </h3>
                <p className="text-gray-600">
                  Discover our unique methodology for practical skill
                  development
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 text-center">
                <Lightbulb className="w-12 h-12 text-brand-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Future Vision
                </h3>
                <p className="text-gray-600">
                  Our plans for expanding into new technologies and
                  opportunities
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats Preview */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-600 mb-2">500+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-600 mb-2">10+</div>
              <div className="text-gray-600">Workshops Conducted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-600 mb-2">4</div>
              <div className="text-gray-600">Core Skill Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand-600 to-brand-800 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-xl text-blue-100 mb-6">
              Be part of the movement to transform education and prepare
              students for tomorrow's challenges.
            </p>
            <Button className="bg-white text-brand-700 hover:bg-gray-100">
              Get Involved
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
