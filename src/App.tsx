import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create meta tags for SEO
export const MetaTags = () => (
  <>
    <title>Improvise Academy - Best Coaching for JEE, NEET & WBJEE in Kolkata</title>
    <meta name="description" content="Improvise Academy offers top-quality coaching for JEE Main & Advanced, NEET, and WBJEE in Kolkata. Join our proven program for engineering and medical entrance exams." />
    <meta name="keywords" content="JEE coaching Kolkata, NEET coaching Kolkata, WBJEE preparation, engineering entrance coaching, medical entrance coaching, IIT JEE preparation, NEET preparation" />
    <meta name="author" content="Improvise Academy" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://www.improviseacademy.com" />
    
    {/* Open Graph / Social Media Meta Tags */}
    <meta property="og:title" content="Improvise Academy - Best Coaching for JEE, NEET & WBJEE in Kolkata" />
    <meta property="og:description" content="Join Kolkata's premier coaching institute for engineering and medical entrance exams with proven results." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.improviseacademy.com" />
    <meta property="og:image" content="/placeholder.jpg" />
    
    {/* Schema.org structured data */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Improvise Academy",
        "url": "https://www.improviseacademy.com",
        "logo": "https://www.improviseacademy.com/logo.png",
        "description": "Premier coaching institute in Kolkata for JEE, NEET, and WBJEE preparation",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Education Street",
          "addressLocality": "Kolkata",
          "postalCode": "700091",
          "addressRegion": "West Bengal",
          "addressCountry": "IN"
        },
        "telephone": "+91-9876543210",
        "email": "info@improviseacademy.com",
        "sameAs": [
          "https://www.facebook.com/improviseacademy",
          "https://twitter.com/improviseacademy"
        ]
      })}
    </script>
  </>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MetaTags />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;