import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import { serviceSchema } from "@/lib/schema";
import Accordion from "@/components/Accordion";
import Testimonial from "@/components/Testimonial";

// Extended descriptions for each service (keyed by slug)
const extendedDescriptions: Record<string, string[]> = {
  "testosterone-replacement-therapy": [
    "Testosterone is one of the most critical hormones in the male body, influencing everything from energy levels and muscle mass to mood, cognitive function, and sexual health. When testosterone drops below optimal levels, the effects can be far-reaching. Many men chalk up their symptoms to aging or stress, but low testosterone is a medical condition that responds well to treatment.",
    "At Revive Medical Group, our TRT program goes beyond simply prescribing testosterone. We take a whole-body approach, evaluating your complete hormonal profile along with metabolic markers, thyroid function, and lifestyle factors. This ensures that we address not just the testosterone deficiency itself, but any related imbalances that may be compounding your symptoms.",
    "Chad Watts, DMSc, PA-C, brings years of clinical experience in hormone optimization. He personally reviews every lab result, designs every protocol, and monitors every patient throughout their treatment journey. Whether you are dealing with fatigue, body composition changes, or declining performance, our TRT program is built to get you back to where you want to be.",
  ],
  "semaglutide-weight-loss": [
    "For millions of Americans, traditional diets and exercise programs simply are not enough to achieve lasting weight loss. The problem is not willpower. It is biology. Hormonal signals, metabolic adaptation, and genetic predisposition all work against sustained fat loss. That is where semaglutide comes in.",
    "Semaglutide is a GLP-1 receptor agonist that works by mimicking a natural gut hormone involved in appetite regulation and blood sugar control. It reduces hunger at the neurological level, slows gastric emptying so you feel satisfied longer, and helps your body respond more effectively to insulin. Clinical trials have demonstrated average weight loss of 15 to 20 percent of body weight.",
    "Our semaglutide program at Revive Medical Group is medically supervised from start to finish. We begin with comprehensive lab work and a health evaluation to make sure semaglutide is safe and appropriate for you. From there, we use a gradual dose titration schedule to minimize side effects and maximize results. Regular check-ins keep you on track and allow us to adjust your plan as your body responds.",
  ],
  bhrt: [
    "Hormonal decline is not limited to menopause or andropause. Both men and women can experience shifts in estrogen, progesterone, testosterone, and other key hormones at various stages of life. When these hormones fall out of balance, the effects show up as fatigue, weight gain, mood swings, sleep problems, and a general sense that something is off.",
    "Bioidentical hormone replacement therapy uses hormones derived from plant sources that are molecularly identical to the ones your body produces naturally. Unlike synthetic hormones, which have altered molecular structures, bioidentical hormones fit your body's hormone receptors precisely. Many patients report fewer side effects and a more natural overall response compared to synthetic alternatives.",
    "At Revive Medical Group, every BHRT protocol starts with comprehensive lab testing and a detailed symptom review. Chad works with compounding pharmacies to create customized hormone formulations that match your specific deficiencies. Whether you prefer creams, pellets, or another delivery method, your treatment is tailored to your body, your symptoms, and your goals.",
  ],
  "iv-nutrient-therapy": [
    "Your body depends on a steady supply of vitamins, minerals, and amino acids to function at its best. But even with a healthy diet, absorption through the digestive tract is limited. Factors like gut health, age, medications, and stress can further reduce how much nutrition actually reaches your cells.",
    "IV nutrient therapy bypasses the digestive system entirely, delivering nutrients directly into your bloodstream. This allows for near-complete absorption at concentrations that simply are not possible through oral supplementation. The result is faster, more noticeable effects on energy, immune function, recovery, and overall wellness.",
    "Our IV therapy menu at Revive Medical Group includes formulations for immune support, energy and metabolism, athletic recovery, hydration, and general wellness. Each drip can be customized based on your specific needs and lab results. Sessions typically take 30 to 60 minutes in a comfortable, relaxed setting.",
  ],
  "sexual-dysfunction-therapy": [
    "Sexual dysfunction is more common than most people think, and it affects both men and women. For men, erectile dysfunction, low libido, and performance anxiety can erode confidence and strain relationships. For women, hormonal changes, vaginal dryness, and decreased desire can feel isolating and frustrating.",
    "The root causes of sexual dysfunction are rarely psychological alone. Hormonal imbalances, vascular issues, medication side effects, and metabolic conditions all play significant roles. That is why our approach starts with diagnostic testing rather than assumptions. We measure your hormone levels, evaluate vascular health, and review your full medical picture before recommending treatment.",
    "Chad Watts approaches sexual health with the same precision and confidentiality he brings to every area of practice. Treatment options may include hormone optimization, peptide therapy, PDE5 inhibitors, or combination protocols. Every plan is private, personalized, and focused on restoring both function and confidence.",
  ],
  "hormonal-imbalance-therapy": [
    "Hormones act as your body's chemical messaging system, regulating everything from metabolism and mood to sleep, immune function, and reproductive health. When even one hormone is out of range, the downstream effects can touch every aspect of how you feel and function.",
    "Hormonal imbalance therapy at Revive Medical Group is a comprehensive approach that goes beyond treating a single hormone. We test the full spectrum: thyroid hormones, cortisol, insulin, estrogen, progesterone, testosterone, DHEA, and vitamin D. This complete picture allows us to identify not just what is off, but why it is off and how the imbalances interact with each other.",
    "Treatment may include bioidentical hormones, thyroid medication, adrenal support, targeted supplementation, and lifestyle modifications. The goal is not to mask symptoms with a single prescription, but to restore balance across your entire endocrine system. Regular monitoring ensures your protocol stays effective as your body responds and your needs evolve.",
  ],
  "peptide-treatment": [
    "Peptides are short chains of amino acids that serve as signaling molecules in your body. They communicate with specific cells and tissues to trigger targeted biological responses, from tissue repair and immune activation to growth hormone release and fat metabolism. Think of them as highly specific instructions that tell your body what to do.",
    "Peptide therapy has gained significant traction in regenerative and anti-aging medicine because of its precision and relatively low side effect profile. Compounds like BPC-157 support gut and tissue healing. CJC-1295 and Ipamorelin stimulate natural growth hormone production. Thymosin Alpha-1 enhances immune function. Each peptide has a specific mechanism and use case.",
    "At Revive Medical Group, peptide protocols are designed around your individual goals, whether that is faster recovery from training, improved body composition, anti-aging support, or immune enhancement. Chad selects the right peptides based on your lab work, health history, and objectives, then monitors your response to fine-tune the approach over time.",
  ],
  "growth-hormone-deficiency": [
    "Growth hormone is not just for growing children. In adults, it plays a critical role in body composition, bone density, energy levels, skin health, and cellular repair. After age 30, growth hormone production declines by roughly 14 percent per decade. By middle age, many adults are functionally deficient.",
    "The symptoms of growth hormone deficiency often overlap with other conditions, which is why it frequently goes undiagnosed. Increased body fat (especially around the midsection), reduced muscle mass, thin skin, poor exercise recovery, and low energy are all hallmarks. Blood tests measuring IGF-1 levels provide a clear picture of your growth hormone status.",
    "Our growth hormone deficiency treatment at Revive Medical Group may include growth hormone secretagogues, peptide therapy, or direct replacement depending on the severity of your deficiency and your health goals. Chad builds every protocol around your lab results and closely monitors your progress to ensure safe, effective optimization.",
  ],
  botox: [
    "Botox is one of the most popular aesthetic treatments worldwide, and for good reason. It is minimally invasive, takes less than 15 minutes, requires no downtime, and delivers consistent, natural-looking results when performed by a skilled injector. At Revive Medical Group, we specialize in conservative Botox techniques that soften lines without sacrificing your natural expressions.",
    "The science behind Botox is straightforward. Botulinum toxin temporarily relaxes the muscles responsible for dynamic wrinkles, the lines that form from repeated facial movements like squinting, frowning, and raising your eyebrows. By calming these muscles, the overlying skin smooths out, giving you a refreshed, rested appearance.",
    "Beyond cosmetic applications, Botox is also effective for medical conditions like excessive sweating (hyperhidrosis), TMJ pain, and chronic migraines. During your consultation, Chad will assess your facial anatomy, discuss your goals, and map out a precise treatment plan tailored to your unique features. The goal is always enhancement, never a frozen or overdone look.",
  ],
  "dermal-filler": [
    "As we age, the face naturally loses volume in key areas: the cheeks flatten, lips thin, and lines deepen around the nose and mouth. Dermal fillers restore this lost volume using hyaluronic acid, a substance your body produces naturally. The result is smoother skin, more defined contours, and a more youthful appearance without surgery.",
    "Modern dermal fillers come in a range of consistencies designed for different areas of the face. Thinner fillers work well for lips and fine lines. Thicker, more structured fillers provide lift and definition in the cheeks, jawline, and chin. This versatility allows your provider to create a cohesive, natural-looking result across the entire face.",
    "At Revive Medical Group, our filler treatments prioritize a conservative, buildable approach. We would rather start with less and add more at a follow-up than overdo it in a single session. Every injection is guided by a thorough understanding of facial anatomy and a commitment to results that look like you, just refreshed.",
  ],
  "hair-restoration": [
    "Hair loss affects both men and women and can have a significant impact on self-confidence and quality of life. While genetics play a major role, hormonal imbalances, thyroid dysfunction, nutritional deficiencies, stress, and autoimmune conditions can all contribute to thinning hair and hair loss.",
    "Our hair restoration program combines multiple proven therapies for a comprehensive approach. Platelet-rich plasma (PRP) therapy uses your own blood to deliver concentrated growth factors directly to the scalp. Peptide treatments stimulate dormant follicles. Nutritional optimization and hormone balancing address the internal factors that may be driving your hair loss.",
    "Results from hair restoration are gradual but meaningful. Most patients notice reduced shedding within the first month and visible new growth between two and four months. With consistent treatment, significant improvements in density and thickness are typical by the six to twelve month mark. Chad evaluates your specific pattern and cause of loss to build a protocol that gives you the best chance of regrowth.",
  ],
};

// Generic testimonials mapped to service categories
const serviceTestimonials: Record<string, { quote: string; author: string }> = {
  "testosterone-replacement-therapy": {
    quote:
      "I had been dealing with fatigue and brain fog for years before I found Revive. Within a month of starting TRT, I felt like a completely different person. My energy is back, my workouts are better, and my wife says I seem happier. Chad genuinely cares about his patients.",
    author: "Michael R., North Myrtle Beach",
  },
  "semaglutide-weight-loss": {
    quote:
      "I tried every diet out there and nothing stuck. Semaglutide through Revive changed everything. I have lost 40 pounds in four months, and for the first time in my life, I do not feel constantly hungry. The team monitors everything closely and I always feel supported.",
    author: "Jennifer T., Myrtle Beach",
  },
  bhrt: {
    quote:
      "After struggling with hot flashes, mood swings, and terrible sleep for over a year, I finally tried BHRT at Revive. The difference was night and day. I sleep through the night now, my mood is stable, and I feel like myself again. I wish I had done this sooner.",
    author: "Susan K., Longs",
  },
  "iv-nutrient-therapy": {
    quote:
      "I get the immune boost IV every couple of weeks and the difference in my energy and how often I get sick is remarkable. The whole experience is relaxing, the staff is wonderful, and I always leave feeling recharged.",
    author: "David M., Tabor City",
  },
  "sexual-dysfunction-therapy": {
    quote:
      "This was a hard topic to bring up with a doctor, but Chad made the entire conversation comfortable and professional. He ran thorough tests, found the issue, and the treatment has been life-changing for me and my relationship.",
    author: "James P., North Myrtle Beach",
  },
  "hormonal-imbalance-therapy": {
    quote:
      "I was gaining weight, losing hair, and exhausted no matter how much I slept. My regular doctor kept saying my labs were normal. Chad ran a comprehensive hormone panel and found multiple imbalances. Three months into treatment, I feel like a new person.",
    author: "Rachel W., Conway",
  },
  "peptide-treatment": {
    quote:
      "I started peptide therapy for recovery after years of joint pain and slow healing from workouts. The results have been incredible. My recovery time is cut in half, my sleep is deeper, and I have more energy than I have had in a decade.",
    author: "Brian L., Myrtle Beach",
  },
  "growth-hormone-deficiency": {
    quote:
      "Chad explained my growth hormone levels in a way that finally made sense. After starting treatment, my body composition changed noticeably. Less belly fat, more muscle tone, better skin, and way more energy. I feel ten years younger.",
    author: "Mark S., North Myrtle Beach",
  },
  botox: {
    quote:
      "I was nervous about looking overdone, but the team at Revive nailed it. My forehead lines are gone, but I still look completely natural. My friends keep asking if I changed my skincare routine. That is exactly the result I wanted.",
    author: "Amanda G., Myrtle Beach",
  },
  "dermal-filler": {
    quote:
      "I got cheek and lip filler at Revive and the results are so natural. No one can tell I had anything done, they just say I look refreshed and well-rested. The conservative approach is exactly what I was looking for.",
    author: "Lauren D., North Myrtle Beach",
  },
  "hair-restoration": {
    quote:
      "My hair had been thinning for years and I was starting to lose confidence. After a few months of PRP and peptide treatment at Revive, I can see real new growth coming in. It is a slow process but absolutely worth it.",
    author: "Chris H., Longs",
  },
};

// "Is This Right for You?" content per service
const compatibilityInfo: Record<string, string> = {
  "testosterone-replacement-therapy":
    "TRT may be right for you if you are a man over 30 experiencing persistent fatigue, low libido, difficulty building muscle, or mood changes that do not improve with lifestyle adjustments. A simple blood test can determine whether your testosterone levels are below optimal range. TRT is not appropriate for men actively trying to conceive without additional fertility support, or those with untreated prostate conditions.",
  "semaglutide-weight-loss":
    "Semaglutide is generally appropriate for adults with a BMI of 30 or higher, or a BMI of 27 or higher with at least one weight-related health condition such as type 2 diabetes, high blood pressure, or high cholesterol. It is a strong option if you have struggled with traditional weight loss methods. Semaglutide is not recommended during pregnancy or for individuals with a personal or family history of medullary thyroid carcinoma.",
  bhrt:
    "BHRT may be a fit if you are experiencing symptoms of hormonal imbalance such as hot flashes, night sweats, mood swings, fatigue, weight gain, or low libido. Both men and women can benefit from BHRT at various stages of life. It is especially common during perimenopause, menopause, and andropause. A comprehensive hormone panel will confirm whether your levels are out of range.",
  "iv-nutrient-therapy":
    "IV nutrient therapy is suitable for most healthy adults looking to boost energy, support immune function, enhance athletic recovery, or address nutrient deficiencies. It is especially beneficial if you have digestive issues that limit oral absorption. There are minimal contraindications, but we screen for kidney conditions and certain allergies before treatment.",
  "sexual-dysfunction-therapy":
    "This treatment is appropriate for both men and women experiencing sexual health concerns that affect quality of life. If you are dealing with erectile dysfunction, low desire, difficulty with arousal, or discomfort during intercourse, diagnostic testing can identify whether hormonal, vascular, or other factors are at play. Treatment is confidential and tailored to your specific situation.",
  "hormonal-imbalance-therapy":
    "If you are experiencing a combination of symptoms like unexplained weight changes, chronic fatigue, mood instability, hair loss, or poor sleep that your regular doctor has not been able to resolve, a comprehensive hormone panel may reveal the answer. This approach is right for anyone who suspects their hormones are not where they should be, regardless of age or gender.",
  "peptide-treatment":
    "Peptide therapy is a good fit if you are looking for targeted support with recovery, body composition, anti-aging, immune function, or growth hormone optimization. It appeals to athletes, active adults, and anyone interested in performance and longevity medicine. Peptides work well as standalone therapy or in combination with other treatments like TRT or BHRT.",
  "growth-hormone-deficiency":
    "Growth hormone treatment is appropriate if blood work shows low IGF-1 levels and you are experiencing symptoms like increased body fat, decreased muscle mass, poor recovery, low energy, or premature skin aging. It is most common in adults over 35, but younger patients with pituitary dysfunction or prior head injuries may also qualify.",
  botox:
    "Botox is right for you if you want to soften dynamic wrinkles caused by facial muscle movement, including forehead lines, frown lines, and crow's feet. It is also used for hyperhidrosis (excessive sweating) and TMJ tension. Most healthy adults over 18 are candidates. Botox is not recommended during pregnancy or for individuals with certain neuromuscular disorders.",
  "dermal-filler":
    "Dermal fillers are a good option if you have noticed volume loss in your cheeks, lips, or jawline, or if you want to smooth deep lines and folds around the nose and mouth. They are suitable for most healthy adults looking for non-surgical facial rejuvenation. Fillers are not recommended during pregnancy or for individuals with active skin infections in the treatment area.",
  "hair-restoration":
    "Hair restoration therapy is appropriate if you are experiencing thinning hair, a receding hairline, or increased shedding. Both men and women are candidates. The earlier you begin treatment, the better the outcomes tend to be. Our evaluation identifies whether hormonal, nutritional, or other factors are contributing to your hair loss so treatment can target the root cause.",
};

// Chad's approach content per service
const chadsApproach: Record<string, string> = {
  "testosterone-replacement-therapy":
    "Chad does not believe in cookie-cutter TRT protocols. He has seen too many clinics hand out a standard dose without bothering to look at the full picture. His approach starts with an exhaustive lab panel and an honest conversation about your symptoms, your goals, and what your daily life actually looks like. From there, he designs a protocol around you, not around a generic dosing chart. He selects the delivery method that fits your lifestyle, dials in the dosage based on your unique physiology, and adjusts as your body responds. Every follow-up includes updated labs and a real discussion about how you are feeling. If something is not working, he changes it. If something needs fine-tuning, he fine-tunes it. The goal is not just normal testosterone levels. The goal is optimal function: better energy, better body composition, better mood, better performance in every area of your life.",
  "semaglutide-weight-loss":
    "Chad has watched too many patients blame themselves for failed diets when the real issue was biological. His semaglutide program is built on the understanding that weight loss is a medical challenge, not a moral one. He starts every patient with thorough lab work to understand their metabolic baseline, then builds a program around gradual titration to keep side effects minimal and results sustainable. He checks in regularly, not to lecture, but to adjust. If a patient is not responding as expected, he investigates why rather than just increasing the dose. He combines semaglutide with nutritional guidance and, when appropriate, complementary therapies like peptides or IV nutrients to support the body through the process. The end goal is not just weight loss. It is metabolic health that lasts.",
  bhrt:
    "Chad approaches BHRT with precision that comes from years of studying hormone optimization at the doctoral level. He does not guess at dosages or prescribe the same formulation for every patient. He tests extensively, listens carefully to your symptom history, and works with compounding pharmacies to create a hormone formulation that matches exactly what your body needs. He prefers bioidentical hormones because they are structurally identical to what your body already produces, which generally means better receptor binding and fewer side effects. He monitors your progress closely in the early weeks, adjusting as needed until your symptoms resolve and your labs confirm optimal balance. His patients appreciate that he takes the time to explain the why behind every decision.",
  "iv-nutrient-therapy":
    "Chad sees IV nutrient therapy as a powerful complement to almost any treatment plan. His philosophy is simple: your body cannot heal, optimize, or perform if it is running on depleted fuel. He selects IV formulations based on your specific needs, not a one-size-fits-all drip. If your labs show deficiencies, he targets those. If you are recovering from illness or training hard, he adjusts accordingly. He has seen the difference that proper cellular nutrition makes in patients on TRT, BHRT, peptide therapy, and semaglutide. When your cells have what they need, everything else works better. He considers IV therapy one of the most underutilized tools in modern medicine.",
  "sexual-dysfunction-therapy":
    "Chad understands that sexual health is one of the most personal and difficult topics for patients to discuss. He creates a comfortable, judgment-free environment from the first conversation. His diagnostic approach is thorough because he knows that sexual dysfunction is almost always a symptom of something deeper, whether that is hormonal imbalance, vascular insufficiency, medication side effects, or metabolic dysfunction. He does not hand out prescriptions without understanding the cause. Once he identifies the root issue, he builds a targeted treatment plan that may combine hormone therapy, peptides, PDE5 inhibitors, or other interventions. His goal is not a quick fix. It is restored function and lasting confidence.",
  "hormonal-imbalance-therapy":
    "Chad built his practice around the belief that most chronic health complaints have a hormonal component that mainstream medicine overlooks. He has seen countless patients told their labs are \"normal\" when they clearly are not functioning well. His approach tests the full endocrine picture, not just one or two hormones, and he interprets the results through the lens of optimal ranges, not just reference ranges. He treats the whole system: thyroid, adrenals, sex hormones, insulin, and the interactions between them. This is not about writing one prescription and sending you on your way. It is about building a protocol that addresses every imbalance, monitoring your response, and adjusting until you feel genuinely well.",
  "peptide-treatment":
    "Chad stays on the cutting edge of peptide research because he sees firsthand how transformative these therapies can be. He carefully selects peptides based on your specific goals and health status, never taking a one-size-fits-all approach. He educates every patient on exactly what each peptide does, how it works in their body, and what to expect. He sources only pharmaceutical-grade compounds and monitors your response with regular labs and check-ins. Many of his patients combine peptides with other Revive treatments for synergistic results, and Chad is skilled at designing integrated protocols that maximize benefit without unnecessary complexity.",
  "growth-hormone-deficiency":
    "Chad takes growth hormone deficiency seriously because he knows how much it affects quality of life. He starts with proper diagnostic testing, including IGF-1 and a complete hormone panel, before making any treatment recommendations. He tailors the protocol to your level of deficiency and your goals, whether that is body composition improvement, anti-aging support, or overall vitality. He monitors your response closely, adjusting the approach as your levels normalize. His patients appreciate that he explains the science clearly and sets realistic expectations about timelines and outcomes.",
  botox:
    "Chad and his team approach Botox with an aesthetic philosophy rooted in restraint. The goal is never to freeze your face or eliminate every line. It is to soften the ones that bother you while keeping your expressions natural and authentic. He studies your facial anatomy carefully before placing a single injection, mapping out a plan that respects your unique bone structure and muscle patterns. He uses conservative dosing and invites patients back for touch-ups rather than over-treating in one visit. His patients consistently say that people notice they look refreshed but cannot pinpoint what changed. That is the standard he holds himself to.",
  "dermal-filler":
    "Chad believes that excellent filler work is invisible. Nobody should look at you and think \"filler.\" They should think you look well-rested, healthy, and vibrant. His injection technique is precise and conservative, focusing on restoring lost volume in a way that enhances your natural features rather than altering them. He uses different filler consistencies for different facial zones and takes the time to explain why each product was selected for each area. He prefers a buildable approach, starting with a modest amount and adding more at follow-up if needed. This philosophy consistently produces results that his patients love and feel confident about.",
  "hair-restoration":
    "Chad takes a multi-pronged approach to hair restoration because he knows that a single treatment rarely delivers the best results. He starts by identifying the underlying cause of your hair loss through blood work and scalp assessment. If hormonal imbalances, thyroid dysfunction, or nutritional deficiencies are contributing factors, he addresses those first. Then he layers in targeted therapies like PRP and peptide treatments to stimulate follicle activity and new growth. He tracks your progress with photos and regular assessments, adjusting the protocol as needed. His honest expectation-setting means you know what to anticipate at each stage of the regrowth timeline.",
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) {
    return { title: "Service Not Found | Revive Medical Group" };
  }
  return {
    title: `${service.title} | Revive Medical Group`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Revive Medical Group`,
      description: service.description,
      images: [{ url: service.image }],
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((s) => service.relatedSlugs.includes(s.slug));
  const extended = extendedDescriptions[service.slug] || [service.description];
  const testimonial = serviceTestimonials[service.slug];
  const compatibility = compatibilityInfo[service.slug];
  const approach = chadsApproach[service.slug];

  const schema = serviceSchema({
    title: service.title,
    slug: service.slug,
    description: service.description,
    image: service.image,
  });

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative h-[350px] md:h-[450px] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark-slate/70" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <span className="text-4xl mb-4">{service.icon}</span>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
            {service.title}
          </h1>
          <p className="max-w-2xl text-white/80 text-lg">{service.description}</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* What Is Section */}
            <section className="py-14 md:py-24 border-b border-warm-border">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-dark-slate mb-6">
                What is {service.shortTitle}?
              </h2>
              <div className="space-y-4">
                {extended.map((paragraph, i) => (
                  <p key={i} className="text-primary/80 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {/* Common Symptoms */}
            <section className="py-14 md:py-24 border-b border-warm-border">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-dark-slate mb-6">
                Common Symptoms
              </h2>
              <p className="text-primary/70 mb-8">
                If you are experiencing any of the following, {service.shortTitle} may be able to help:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.symptoms.map((symptom, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-light-warm rounded-xl"
                  >
                    <svg
                      className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark-slate text-sm">{symptom}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* How It Works */}
            <section className="py-14 md:py-24 border-b border-warm-border">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-dark-slate mb-8">
                How It Works
              </h2>
              <div className="space-y-0">
                {service.process.map((step, i) => (
                  <div key={step.step} className="relative flex gap-6 pb-10 last:pb-0">
                    {/* Timeline line */}
                    {i < service.process.length - 1 && (
                      <div className="absolute left-5 top-12 bottom-0 w-px bg-warm-border" />
                    )}
                    {/* Step number */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm">
                      {step.step}
                    </div>
                    {/* Content */}
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-dark-slate mb-2">
                        {step.title}
                      </h3>
                      <p className="text-primary/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Is This Right for You? */}
            {compatibility && (
              <section className="py-14 md:py-24 border-b border-warm-border">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-dark-slate mb-6">
                  Is This Right for You?
                </h2>
                <p className="text-primary/80 leading-relaxed">{compatibility}</p>
              </section>
            )}

            {/* Chad's Approach */}
            {approach && (
              <section className="py-14 md:py-24 border-b border-warm-border">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-dark-slate mb-6">
                  Chad&apos;s Approach
                </h2>
                <p className="text-primary/80 leading-relaxed">{approach}</p>
              </section>
            )}

            {/* Testimonial */}
            {testimonial && (
              <section className="py-14 md:py-24 border-b border-warm-border">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-dark-slate mb-6">
                  What Our Patients Say
                </h2>
                <Testimonial
                  quote={testimonial.quote}
                  author={testimonial.author}
                  rating={5}
                />
              </section>
            )}

            {/* FAQ */}
            <section className="py-14 md:py-24">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-dark-slate mb-6">
                Frequently Asked Questions
              </h2>
              <Accordion items={service.faqs} />
            </section>
          </div>

          {/* Sidebar (Related Services) */}
          <aside className="lg:col-span-1 py-14 md:py-24 lg:pt-24">
            <div className="lg:sticky lg:top-28">
              <h3 className="font-heading text-xl font-semibold text-dark-slate mb-6">
                Related Services
              </h3>
              <div className="space-y-4">
                {relatedServices.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/services/${related.slug}`}
                    className="block p-4 bg-light-warm rounded-xl hover:shadow-md transition-shadow group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{related.icon}</span>
                      <div>
                        <h4 className="font-semibold text-dark-slate text-sm group-hover:text-primary transition-colors">
                          {related.title}
                        </h4>
                        <p className="text-xs text-primary/60 mt-1 line-clamp-2">
                          {related.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Sidebar CTA */}
              <div className="mt-8 p-6 bg-dark-slate rounded-2xl text-center">
                <h4 className="font-heading text-lg font-semibold text-white mb-3">
                  Ready to Get Started?
                </h4>
                <p className="text-white/70 text-sm mb-4">
                  Book a consultation for {service.shortTitle} today.
                </p>
                <a
                  href="https://www.revivemedgroup.com/appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-dark-slate bg-secondary rounded-full hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-slate"
                >
                  Book a Consultation
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Full-Width Bottom CTA */}
      <section className="py-14 md:py-24 bg-dark-slate text-white text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Book a Consultation for {service.title}
          </h2>
          <p className="max-w-2xl mx-auto text-white/70 mb-8">
            Take the first step toward feeling your best. Schedule a consultation with Chad Watts, DMSc, PA-C, and get a
            personalized treatment plan built around your goals.
          </p>
          <a
            href="https://www.revivemedgroup.com/appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-dark-slate bg-secondary rounded-full hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-dark-slate"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </>
  );
}
