import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MastheadHeader } from "@/components/layout/masthead-header";
import { Footer } from "@/components/layout/footer";
import { FaqWidget } from "@/components/chat/faq-widget";
import { HomePage } from "@/pages/home-page";
import { WorkPage } from "@/pages/work-page";
import { WorkDetailPage } from "@/pages/work-detail-page";
import { AboutPage } from "@/pages/about-page";
import { ContactPage } from "@/pages/contact-page";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="flex min-h-screen flex-col">
        <MastheadHeader />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:id" element={<WorkDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <FaqWidget />
      </div>
    </BrowserRouter>
  );
}

export default App;
