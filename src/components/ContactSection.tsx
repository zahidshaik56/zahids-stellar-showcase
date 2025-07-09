import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, MapPin, Phone, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "zahid.hussain@email.com",
      href: "mailto:zahid.hussain@email.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      href: "tel:+91XXXXXXXXX"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/zahidhussain",
      username: "@zahidhussain"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/zahidhussain",
      username: "Zahid Hussain"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      href: "mailto:zahid.hussain@email.com",
      username: "zahid.hussain@email.com"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="bg-hero-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-4 hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Find me on</h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                    <div>
                      <p className="font-medium">{social.label}</p>
                      <p className="text-sm text-muted-foreground">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6 lg:p-8 shadow-elegant">
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="transition-all duration-300 focus:shadow-elegant"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="transition-all duration-300 focus:shadow-elegant"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="What's this about?"
                  className="transition-all duration-300 focus:shadow-elegant"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project or just say hello!"
                  rows={6}
                  className="transition-all duration-300 focus:shadow-elegant resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                size="lg"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-hero-gradient rounded-2xl p-8 lg:p-12 text-primary-foreground">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to work together?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on interesting projects. 
              Let's create something amazing together!
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              className="text-lg px-8"
            >
              <Mail className="mr-2" />
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;