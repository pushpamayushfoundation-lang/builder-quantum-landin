import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-brand-600 to-brand-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Ready to start your learning journey? We're here to help you choose
            the right path.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form Preview */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Form Coming Soon
              </h2>
              <p className="text-gray-600 mb-8">
                We're setting up a comprehensive contact system to make it
                easier for you to reach us. For now, please use the contact
                information on the right to get in touch directly.
              </p>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <MessageCircle className="w-8 h-8 text-brand-600 mr-4" />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Quick Inquiry
                        </h3>
                        <p className="text-gray-600">
                          For general questions about our programs
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Send className="w-8 h-8 text-brand-600 mr-4" />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Course Registration
                        </h3>
                        <p className="text-gray-600">
                          Ready to enroll? Let us guide you through the process
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-brand-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Location
                        </h3>
                        <p className="text-gray-600">
                          Your Address
                          <br />
                          City, State - PIN Code
                          <br />
                          India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-brand-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Phone
                        </h3>
                        <p className="text-gray-600">
                          +91 XXXXX XXXXX
                          <br />
                          <span className="text-sm text-gray-500">
                            Call us for immediate assistance
                          </span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-brand-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Email
                        </h3>
                        <p className="text-gray-600">
                          pushpam.ayushfoundation@gmail.com
                          <br />
                          <span className="text-sm text-gray-500">
                            We'll respond within 24 hours
                          </span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-brand-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          Operating Hours
                        </h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 4:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" className="flex-1">
                    Instagram
                  </Button>
                  <Button variant="outline" className="flex-1">
                    YouTube
                  </Button>
                  <Button variant="outline" className="flex-1">
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Get Started?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Schedule a Call
                </h3>
                <p className="text-gray-600 mb-6">
                  Speak directly with our team to discuss your learning goals
                  and find the perfect course
                </p>
                <Button className="bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 w-full">
                  Book a Call
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Visit Our Center
                </h3>
                <p className="text-gray-600 mb-6">
                  Come see our facilities, meet our instructors, and experience
                  our hands-on learning environment
                </p>
                <Button variant="outline" className="w-full">
                  Plan a Visit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
