import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Programs } from "@/components/sections/Programs";
import { Admissions } from "@/components/sections/Admissions";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

import { AuthProvider } from "@/lib/auth";
import LoginPage from "@/pages/Login";
import {
  StudentDashboard,
  StudentAssignments,
  StudentLibrary,
  StaffDashboard,
  StaffAssignments,
  StaffLibrary,
  AdminDashboard,
  AdminUsers,
} from "@/pages/portals";

const queryClient = new QueryClient();

function LandingPage() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-background font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Programs />
        <Admissions />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/student" component={StudentDashboard} />
      <Route path="/student/assignments" component={StudentAssignments} />
      <Route path="/student/library" component={StudentLibrary} />
      <Route path="/staff" component={StaffDashboard} />
      <Route path="/staff/assignments" component={StaffAssignments} />
      <Route path="/staff/library" component={StaffLibrary} />
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/admin/users" component={AdminUsers} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
        </AuthProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
