import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import { educationalContent } from '@/lib/educationalContent';
import {
  Award,
  CheckCircle2,
  Printer,
  X,
  Sparkles,
  ShieldCheck,
  Calendar,
  Share2
} from 'lucide-react';
import { toast } from 'sonner';

export default function CertificatesPage() {
  const { profile } = useAuth();
  const { language } = useLanguage();
  const isRtl = language === 'ar';

  const [selectedCert, setSelectedCert] = useState<{
    trackNameAr: string;
    trackNameEn: string;
    serial: string;
  } | null>(null);

  if (!profile) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-24 text-center">
          <p className="text-muted-foreground">{isRtl ? 'يرجى تسجيل الدخول لعرض الشهادات' : 'Please sign in to view certificates'}</p>
        </div>
      </div>
    );
  }

  const currentDate = new Date().toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Header Banner */}
      <section className="pt-20 md:pt-24 pb-8 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-background border-b border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-card/90 backdrop-blur-xl border border-border/80 p-6 md:p-8 rounded-3xl shadow-xl">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center text-3xl font-black shadow-lg shadow-amber-500/20 shrink-0">
                🏆
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 rounded-full text-xs font-extrabold flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    {isRtl ? 'شهادات موثقة' : 'Verified Certificates'}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-foreground">
                  {isRtl ? 'شهادات الإتمام والتفوق' : 'Certificates & Achievements'}
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {isRtl ? 'احصل على شهادة رسمية عند إتمام الدروس واجتياز تقييمات المسارات' : 'Earn official certificates upon completing tracks and quizzes'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates List */}
      <section className="py-8 md:py-12">
        <div className="container max-w-5xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationalContent.sections.map((section, idx) => {
              const serial = `PXL-CERT-2026-${(idx + 1) * 1089}`;
              return (
                <div
                  key={section.id}
                  className="bg-card border border-border/80 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all space-y-5 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl border"
                        style={{ backgroundColor: `${section.color}15`, borderColor: `${section.color}30` }}
                      >
                        {section.emoji}
                      </div>

                      <span className="px-3 py-1 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-extrabold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {isRtl ? 'شهادة مكتملة' : 'Completed'}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-foreground">
                      {isRtl ? section.nameAr : section.nameEn}
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium">
                      {isRtl ? section.descriptionAr : section.descriptionEn}
                    </p>

                    <div className="pt-2 text-xs text-muted-foreground font-bold flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-primary" />
                      <span>{isRtl ? `الرقم التسلسلي: ${serial}` : `Serial: ${serial}`}</span>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      setSelectedCert({
                        trackNameAr: section.nameAr,
                        trackNameEn: section.nameEn,
                        serial,
                      })
                    }
                    className="w-full py-3 bg-primary text-primary-foreground font-bold text-xs rounded-xl shadow-md hover:bg-primary/90 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    <Award className="w-4 h-4" />
                    <span>{isRtl ? 'عرض وتنزيل الشهادة (Print Certificate)' : 'View & Download Certificate'}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OFFICIAL CERTIFICATE MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-3xl bg-slate-950 text-slate-100 border-4 border-amber-500/40 rounded-3xl p-8 md:p-12 shadow-2xl space-y-6 text-center overflow-hidden my-auto"
              dir={isRtl ? 'rtl' : 'ltr'}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 end-5 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white transition-colors cursor-pointer print:hidden"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Watermark Seal */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none text-9xl">
                👑
              </div>

              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/20 text-amber-400 border border-amber-500/40 rounded-full text-xs font-black tracking-widest uppercase">
                <Sparkles className="w-4 h-4" />
                PIXEL COMMUNITY ACADEMY
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-amber-400 tracking-tight">
                {isRtl ? 'شهادة إتمام وتفوق' : 'Certificate of Completion'}
              </h1>

              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                {isRtl
                  ? 'تشهد إدارة أكاديمية PIXEL للتعلم التفاعلي بأن الطالب / المصمم:'
                  : 'This is to certify that student / designer:'}
              </p>

              {/* Student Name */}
              <div className="py-2">
                <h2 className="text-2xl sm:text-4xl font-black text-white underline decoration-amber-500/50 underline-offset-8">
                  {profile.full_name || 'طالب متميز'}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed font-medium">
                {isRtl
                  ? `قد أتم بنجاح وبكفاءة عالية كافة التطبيقات والتقييمات الميدانية في:`
                  : `Has successfully completed all interactive topics and practical evaluations in:`}
              </p>

              <h3 className="text-xl sm:text-2xl font-black text-primary">
                {isRtl ? selectedCert.trackNameAr : selectedCert.trackNameEn}
              </h3>

              {/* Signatures & Seal Footer */}
              <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-start">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400">{isRtl ? 'تاريخ الإصدار:' : 'Issue Date:'}</p>
                  <p className="text-sm font-extrabold text-white flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-amber-500" />
                    <span>{currentDate}</span>
                  </p>
                </div>

                <div className="text-center space-y-1">
                  <div className="w-14 h-14 mx-auto rounded-full bg-amber-500/20 border-2 border-amber-500 text-amber-400 flex items-center justify-center font-black text-xs shadow-lg">
                    SEAL
                  </div>
                  <p className="text-[10px] font-bold text-amber-400 tracking-widest">{selectedCert.serial}</p>
                </div>

                <div className="text-end space-y-1">
                  <p className="text-xs font-bold text-slate-400">{isRtl ? 'المشرف العام (Founder):' : 'Academy Lead:'}</p>
                  <p className="text-sm font-black text-white">{isRtl ? 'م/ عبدو عمارة' : 'Eng. Abdo Emara'}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center justify-center gap-3 print:hidden">
                <button
                  onClick={() => window.print()}
                  className="px-6 py-3 bg-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-lg hover:bg-amber-400 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>{isRtl ? 'طباعة / حفظ كـ PDF' : 'Print / Save as PDF'}</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
