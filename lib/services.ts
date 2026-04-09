export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  icon: string;
  symptoms: string[];
  process: ProcessStep[];
  faqs: FAQ[];
  relatedSlugs: string[];
}

export const services: Service[] = [
  {
    slug: "testosterone-replacement-therapy",
    title: "Testosterone Replacement Therapy (TRT)",
    shortTitle: "TRT",
    description:
      "Restore your energy, strength, and vitality with medically supervised testosterone replacement therapy. Our personalized TRT programs address low testosterone levels using evidence-based protocols tailored to your unique physiology.",
    image: "/images/client/revive/service-trt.jpg",
    icon: "💪",
    symptoms: [
      "Persistent fatigue and low energy levels",
      "Decreased muscle mass and increased body fat",
      "Low libido or sexual dysfunction",
      "Brain fog, poor concentration, and memory issues",
      "Mood changes, irritability, or depression",
      "Reduced bone density",
    ],
    process: [
      {
        step: 1,
        title: "Comprehensive Lab Work",
        description:
          "We start with a full hormone panel and metabolic blood work to establish your baseline testosterone and related hormone levels.",
      },
      {
        step: 2,
        title: "Personalized Treatment Plan",
        description:
          "Based on your lab results, symptoms, and health goals, we design a TRT protocol specific to your needs, including dosage and delivery method.",
      },
      {
        step: 3,
        title: "Supervised Treatment",
        description:
          "Begin your therapy under close medical supervision. We monitor your progress and adjust dosages to optimize results while minimizing side effects.",
      },
      {
        step: 4,
        title: "Ongoing Optimization",
        description:
          "Regular follow-up labs and consultations ensure your levels stay in the optimal range. We fine-tune your protocol as your body responds.",
      },
    ],
    faqs: [
      {
        question: "What are the signs that I might need TRT?",
        answer:
          "Common signs include chronic fatigue, reduced sex drive, difficulty building muscle, increased belly fat, brain fog, and mood changes like irritability or depression. If you are experiencing several of these symptoms, a simple blood test can confirm whether low testosterone is the cause.",
      },
      {
        question: "How quickly will I see results from TRT?",
        answer:
          "Most patients notice improvements in energy and mood within the first two to four weeks. Changes in body composition, libido, and strength typically become more noticeable between six and twelve weeks. Full optimization often takes three to six months of consistent treatment.",
      },
      {
        question: "Is TRT safe for long-term use?",
        answer:
          "When prescribed and monitored by a qualified medical provider, TRT is considered safe for long-term use. We conduct regular blood work to monitor your levels, red blood cell count, and overall health markers to ensure treatment remains safe and effective.",
      },
      {
        question: "What delivery methods do you offer for TRT?",
        answer:
          "We offer several delivery methods including injections, topical creams, and pellet therapy. During your consultation, we will discuss which method aligns best with your lifestyle, preferences, and clinical needs.",
      },
      {
        question: "Will my insurance cover TRT?",
        answer:
          "Coverage varies by insurance plan. We recommend contacting your provider to check coverage. Our team can also provide you with the necessary documentation and diagnostic codes to submit to your insurance company.",
      },
    ],
    relatedSlugs: ["hormonal-imbalance-therapy", "sexual-dysfunction-therapy", "peptide-treatment"],
  },
  {
    slug: "semaglutide-weight-loss",
    title: "Semaglutide Weight Loss Program",
    shortTitle: "Semaglutide",
    description:
      "Achieve sustainable weight loss with our medically supervised semaglutide program. This FDA-recognized GLP-1 therapy helps reduce appetite, regulate blood sugar, and support meaningful, long-term weight management.",
    image: "/images/client/revive/service-semaglutide.jpg",
    icon: "⚖️",
    symptoms: [
      "Difficulty losing weight despite diet and exercise",
      "BMI over 27 with weight-related health conditions",
      "Constant hunger and food cravings",
      "Insulin resistance or prediabetes",
      "Weight regain after previous diets",
      "Metabolic syndrome",
    ],
    process: [
      {
        step: 1,
        title: "Medical Evaluation",
        description:
          "A thorough health assessment including lab work, body composition analysis, and medical history review to determine if semaglutide is right for you.",
      },
      {
        step: 2,
        title: "Gradual Dose Titration",
        description:
          "We start with a low dose and gradually increase over several weeks. This approach minimizes side effects and allows your body to adjust comfortably.",
      },
      {
        step: 3,
        title: "Weekly Injections & Monitoring",
        description:
          "Simple, once-weekly self-administered injections with regular check-ins to track your progress, manage any side effects, and adjust your plan.",
      },
      {
        step: 4,
        title: "Long-Term Maintenance",
        description:
          "As you reach your goals, we develop a maintenance strategy that may include continued low-dose therapy, nutritional guidance, and lifestyle modifications.",
      },
    ],
    faqs: [
      {
        question: "How does semaglutide help with weight loss?",
        answer:
          "Semaglutide mimics a natural hormone called GLP-1 that regulates appetite and food intake. It works by slowing gastric emptying so you feel full longer, reducing hunger signals in the brain, and helping regulate blood sugar levels. Most patients experience a significant reduction in appetite and cravings.",
      },
      {
        question: "How much weight can I expect to lose?",
        answer:
          "Clinical studies show average weight loss of 15 to 20 percent of body weight over 68 weeks. Individual results vary based on starting weight, adherence to the program, and lifestyle factors. Many of our patients see noticeable results within the first month.",
      },
      {
        question: "What are the common side effects?",
        answer:
          "The most common side effects are mild nausea, especially during the initial dose titration phase. Some patients experience constipation or mild stomach discomfort. These side effects typically decrease as your body adjusts. Our gradual dosing approach helps minimize these effects.",
      },
      {
        question: "Am I a good candidate for semaglutide?",
        answer:
          "Semaglutide is generally appropriate for adults with a BMI of 30 or higher, or a BMI of 27 or higher with at least one weight-related condition such as high blood pressure, type 2 diabetes, or high cholesterol. A medical evaluation will determine if it is right for you.",
      },
      {
        question: "Do I need to follow a specific diet while on semaglutide?",
        answer:
          "While semaglutide is effective on its own, combining it with a balanced diet and regular physical activity maximizes results. We provide nutritional guidance as part of your program, but there is no rigid meal plan required.",
      },
    ],
    relatedSlugs: ["peptide-treatment", "iv-nutrient-therapy", "hormonal-imbalance-therapy"],
  },
  {
    slug: "bhrt",
    title: "Bioidentical Hormone Replacement Therapy (BHRT)",
    shortTitle: "BHRT",
    description:
      "Balance your hormones naturally with bioidentical hormone replacement therapy. BHRT uses plant-derived hormones that are molecularly identical to those your body produces, offering a more natural approach to hormone optimization.",
    image: "/images/client/revive/service-bhrt.jpg",
    icon: "🧬",
    symptoms: [
      "Hot flashes and night sweats",
      "Mood swings and anxiety",
      "Weight gain, especially around the midsection",
      "Sleep disturbances and insomnia",
      "Decreased libido and vaginal dryness",
      "Fatigue and reduced mental clarity",
    ],
    process: [
      {
        step: 1,
        title: "Hormone Panel Testing",
        description:
          "Comprehensive blood work to measure your estrogen, progesterone, testosterone, thyroid, and other key hormone levels.",
      },
      {
        step: 2,
        title: "Custom Compounding",
        description:
          "Based on your results, we create a personalized hormone formulation using bioidentical hormones compounded specifically for your body's needs.",
      },
      {
        step: 3,
        title: "Treatment Initiation",
        description:
          "Begin your BHRT protocol with the delivery method best suited to you: creams, pellets, or other options. We guide you through proper usage and expectations.",
      },
      {
        step: 4,
        title: "Follow-Up & Adjustments",
        description:
          "Regular check-ins and lab work at 4 to 6 week intervals allow us to fine-tune your dosage for optimal symptom relief and hormone balance.",
      },
    ],
    faqs: [
      {
        question: "What makes bioidentical hormones different from synthetic ones?",
        answer:
          "Bioidentical hormones are derived from plant sources and are chemically identical to the hormones your body naturally produces. Synthetic hormones have a different molecular structure, which can lead to more side effects. Many patients report that bioidentical hormones feel more natural and produce fewer adverse reactions.",
      },
      {
        question: "Is BHRT only for women going through menopause?",
        answer:
          "No. While BHRT is commonly associated with menopause, it is used for both men and women experiencing hormonal imbalances at any age. Men with low testosterone, women with PCOS, and individuals with thyroid dysfunction can all benefit from BHRT.",
      },
      {
        question: "How long does it take to feel the effects of BHRT?",
        answer:
          "Many patients report initial improvements in sleep and mood within one to two weeks. More significant changes in energy, libido, and body composition typically appear between four and eight weeks. Full optimization usually takes two to three months.",
      },
      {
        question: "Are there risks associated with BHRT?",
        answer:
          "Like any medical treatment, BHRT carries some risks that vary based on your health history. Our thorough evaluation process identifies potential contraindications before starting treatment. Regular monitoring ensures your hormone levels stay within safe, optimal ranges.",
      },
      {
        question: "Can BHRT help with weight loss?",
        answer:
          "Hormonal imbalances are a common contributor to stubborn weight gain, especially around the midsection. By restoring hormones to optimal levels, BHRT can improve metabolism, reduce fat storage, and make it easier to maintain a healthy weight when combined with proper nutrition and exercise.",
      },
    ],
    relatedSlugs: ["hormonal-imbalance-therapy", "testosterone-replacement-therapy", "sexual-dysfunction-therapy"],
  },
  {
    slug: "iv-nutrient-therapy",
    title: "IV Nutrient Therapy",
    shortTitle: "IV Therapy",
    description:
      "Replenish your body at the cellular level with customized IV nutrient infusions. Our IV therapy delivers vitamins, minerals, and amino acids directly into your bloodstream for maximum absorption and rapid results.",
    image: "/images/client/revive/service-iv-therapy.jpg",
    icon: "💧",
    symptoms: [
      "Chronic fatigue and low energy",
      "Frequent illness or weakened immune system",
      "Dehydration and poor recovery after exercise",
      "Brain fog and difficulty concentrating",
      "Nutrient deficiencies despite oral supplementation",
    ],
    process: [
      {
        step: 1,
        title: "Health Assessment",
        description:
          "A brief medical evaluation and discussion of your health goals helps us select the ideal IV formulation for your needs.",
      },
      {
        step: 2,
        title: "Custom Formulation",
        description:
          "We prepare a tailored IV drip based on your specific needs, whether that is immune support, energy enhancement, athletic recovery, or general wellness.",
      },
      {
        step: 3,
        title: "Comfortable Infusion",
        description:
          "Relax in our treatment room while your IV infusion is administered over 30 to 60 minutes. Most patients feel the effects within hours.",
      },
      {
        step: 4,
        title: "Maintenance Schedule",
        description:
          "We recommend a treatment frequency based on your goals, typically weekly or biweekly sessions for optimal results.",
      },
    ],
    faqs: [
      {
        question: "Why is IV therapy more effective than oral vitamins?",
        answer:
          "When you take vitamins orally, your digestive system absorbs only a fraction of the nutrients, typically 20 to 40 percent. IV therapy delivers nutrients directly into your bloodstream, achieving near 100 percent absorption. This means your cells receive the full benefit immediately.",
      },
      {
        question: "How long does an IV therapy session take?",
        answer:
          "Most IV infusions take between 30 and 60 minutes depending on the formulation. You can relax, read, or use your phone during the session. Many patients describe it as a relaxing experience.",
      },
      {
        question: "How often should I get IV therapy?",
        answer:
          "Frequency depends on your goals. For general wellness, monthly sessions are common. For athletic recovery or immune support during cold and flu season, weekly or biweekly sessions may be recommended. We will create a schedule that fits your needs.",
      },
      {
        question: "What types of IV formulations do you offer?",
        answer:
          "We offer several formulations including immune boost, energy and metabolism support, athletic recovery, hydration therapy, and custom blends. Each can be tailored with specific vitamins, minerals, and amino acids based on your needs.",
      },
    ],
    relatedSlugs: ["peptide-treatment", "semaglutide-weight-loss", "hormonal-imbalance-therapy"],
  },
  {
    slug: "sexual-dysfunction-therapy",
    title: "Sexual Dysfunction Therapy",
    shortTitle: "Sexual Health",
    description:
      "Reclaim your intimate health with our comprehensive sexual dysfunction treatments. We address the root hormonal and physiological causes of sexual dysfunction in both men and women with proven, personalized protocols.",
    image: "/images/client/revive/service-sexual-dysfunction.png",
    icon: "❤️",
    symptoms: [
      "Erectile dysfunction or difficulty maintaining erections",
      "Low libido or loss of sexual desire",
      "Difficulty achieving orgasm",
      "Vaginal dryness or discomfort during intercourse",
      "Premature or delayed ejaculation",
    ],
    process: [
      {
        step: 1,
        title: "Confidential Consultation",
        description:
          "A private, judgment-free consultation to discuss your symptoms, health history, and goals. We create a safe space for open conversation.",
      },
      {
        step: 2,
        title: "Diagnostic Testing",
        description:
          "Targeted lab work to identify hormonal imbalances, vascular issues, or other underlying causes contributing to sexual dysfunction.",
      },
      {
        step: 3,
        title: "Tailored Treatment Plan",
        description:
          "Based on your diagnosis, we develop a treatment plan that may include hormone therapy, peptide treatments, PDE5 inhibitors, or combination approaches.",
      },
      {
        step: 4,
        title: "Progress Monitoring",
        description:
          "Regular follow-ups to assess improvement, adjust treatments, and ensure you are achieving the results you want.",
      },
    ],
    faqs: [
      {
        question: "Is sexual dysfunction always caused by low hormones?",
        answer:
          "Not always, but hormonal imbalances are one of the most common underlying causes. Other factors include vascular issues, medications, stress, and psychological factors. Our evaluation identifies all contributing factors so we can treat the root cause, not just the symptoms.",
      },
      {
        question: "Do you treat sexual dysfunction in both men and women?",
        answer:
          "Yes. Sexual dysfunction affects both men and women, and the causes are often different. We offer gender-specific treatments that address the unique hormonal and physiological factors involved for each patient.",
      },
      {
        question: "How soon can I expect improvement?",
        answer:
          "Some treatments produce noticeable results within days, while hormone-based therapies may take two to six weeks for full effect. The timeline depends on the underlying cause and the treatment approach we use.",
      },
      {
        question: "Are the treatments discreet?",
        answer:
          "Absolutely. All consultations and treatments are handled with complete confidentiality. Our office provides private treatment rooms, and we never share patient information without your explicit consent.",
      },
    ],
    relatedSlugs: ["testosterone-replacement-therapy", "bhrt", "hormonal-imbalance-therapy"],
  },
  {
    slug: "hormonal-imbalance-therapy",
    title: "Hormonal Imbalance Therapy",
    shortTitle: "Hormone Balance",
    description:
      "Identify and correct hormonal imbalances that affect your energy, mood, weight, and overall well-being. Our comprehensive approach tests all major hormones and creates a targeted treatment plan to restore balance.",
    image: "/images/client/revive/service-hormonal-imbalance.jpg",
    icon: "⚡",
    symptoms: [
      "Unexplained weight gain or difficulty losing weight",
      "Chronic fatigue unrelated to sleep habits",
      "Mood swings, anxiety, or depression",
      "Hair thinning or hair loss",
      "Irregular menstrual cycles",
      "Poor sleep quality despite good sleep habits",
    ],
    process: [
      {
        step: 1,
        title: "Complete Hormone Panel",
        description:
          "We test a full range of hormones including thyroid, cortisol, estrogen, progesterone, testosterone, DHEA, and insulin to get a complete picture of your hormonal health.",
      },
      {
        step: 2,
        title: "Root Cause Analysis",
        description:
          "Our provider reviews your results alongside your symptoms and medical history to identify the specific imbalances driving your issues.",
      },
      {
        step: 3,
        title: "Integrated Treatment Plan",
        description:
          "A multi-faceted approach that may include hormone therapy, nutritional support, lifestyle modifications, and targeted supplementation.",
      },
      {
        step: 4,
        title: "Ongoing Monitoring",
        description:
          "Regular lab work and check-ins to track your progress and make adjustments, ensuring sustained improvement and optimal hormone levels.",
      },
    ],
    faqs: [
      {
        question: "What hormones do you test for?",
        answer:
          "We run a comprehensive panel that includes testosterone (total and free), estrogen, progesterone, DHEA-S, cortisol, thyroid hormones (TSH, T3, T4), insulin, and vitamin D. Additional markers may be tested based on your specific symptoms.",
      },
      {
        question: "Can hormonal imbalances cause weight gain?",
        answer:
          "Yes. Hormones like thyroid, insulin, cortisol, and sex hormones all play critical roles in metabolism and fat storage. When these hormones are out of balance, your body may store fat more easily, especially around the midsection, regardless of diet and exercise.",
      },
      {
        question: "How is hormonal imbalance therapy different from BHRT?",
        answer:
          "Hormonal imbalance therapy is a broader approach that may include BHRT as one component. It also addresses thyroid function, adrenal health, insulin sensitivity, and nutritional deficiencies. BHRT specifically refers to using bioidentical hormones to replace deficient sex hormones.",
      },
      {
        question: "At what age should I get my hormones tested?",
        answer:
          "Hormonal changes can occur at any age, but they become more common after 30. If you are experiencing symptoms like fatigue, weight gain, mood changes, or low libido, testing is worthwhile regardless of age. Early detection allows for earlier intervention and better outcomes.",
      },
      {
        question: "Will I need to be on treatment permanently?",
        answer:
          "It depends on the underlying cause. Some imbalances can be corrected with short-term treatment and lifestyle changes, while others, particularly age-related hormone decline, may benefit from ongoing management. We reassess regularly to determine what is best for you.",
      },
    ],
    relatedSlugs: ["bhrt", "testosterone-replacement-therapy", "semaglutide-weight-loss"],
  },
  {
    slug: "peptide-treatment",
    title: "Peptide Treatment",
    shortTitle: "Peptides",
    description:
      "Harness the power of targeted peptide therapy to enhance recovery, boost growth hormone production, improve body composition, and support overall cellular health. Our peptide protocols use cutting-edge compounds backed by clinical research.",
    image: "/images/client/revive/service-peptide.png",
    icon: "🔬",
    symptoms: [
      "Slow recovery from workouts or injuries",
      "Declining muscle mass despite training",
      "Poor sleep quality affecting recovery",
      "Accelerated signs of aging",
      "Stubborn body fat that resists diet and exercise",
      "Low energy and reduced physical performance",
    ],
    process: [
      {
        step: 1,
        title: "Assessment & Goal Setting",
        description:
          "We discuss your health goals, whether that is fat loss, muscle gain, anti-aging, recovery, or immune support, and review your medical history.",
      },
      {
        step: 2,
        title: "Peptide Selection",
        description:
          "Based on your goals and labs, we select the peptide or combination of peptides best suited to your needs, such as BPC-157, CJC-1295, or others.",
      },
      {
        step: 3,
        title: "Protocol Initiation",
        description:
          "We provide clear instructions for your peptide protocol, including dosage, timing, and administration technique for self-injection or other delivery methods.",
      },
      {
        step: 4,
        title: "Results Tracking",
        description:
          "Follow-up appointments and lab work to measure progress and adjust your protocol for maximum benefit.",
      },
    ],
    faqs: [
      {
        question: "What are peptides and how do they work?",
        answer:
          "Peptides are short chains of amino acids that act as signaling molecules in your body. They communicate with specific cells and tissues to trigger targeted responses like increased growth hormone production, tissue repair, or immune system activation. Think of them as precise instructions for your body.",
      },
      {
        question: "Are peptides safe?",
        answer:
          "Peptides used in clinical settings have been studied extensively and are generally well tolerated. Since they mimic naturally occurring molecules in your body, they tend to have fewer side effects than synthetic drugs. We only use pharmaceutical-grade peptides and monitor your health throughout treatment.",
      },
      {
        question: "How are peptides administered?",
        answer:
          "Most peptides are administered via small subcutaneous injections using very fine needles, similar to insulin injections. Some peptides are available in oral or nasal spray forms. We teach you the proper technique and make the process as simple as possible.",
      },
      {
        question: "How long do I need to take peptides to see results?",
        answer:
          "Timelines vary by peptide and goal. Some peptides like BPC-157 for tissue repair can show improvement within one to two weeks. Growth hormone peptides typically show noticeable results in four to eight weeks. We set realistic expectations during your consultation.",
      },
      {
        question: "Can peptides be combined with other treatments?",
        answer:
          "Yes. Peptides often work synergistically with other treatments like TRT, BHRT, and semaglutide. Combining therapies under medical supervision can enhance results. We design protocols that safely integrate peptides with your existing treatment plan.",
      },
    ],
    relatedSlugs: ["growth-hormone-deficiency", "testosterone-replacement-therapy", "iv-nutrient-therapy"],
  },
  {
    slug: "growth-hormone-deficiency",
    title: "Growth Hormone Deficiency Treatment",
    shortTitle: "Growth Hormone",
    description:
      "Address growth hormone deficiency with evidence-based therapies that restore vitality, improve body composition, and slow the effects of aging. Our protocols help optimize your natural growth hormone production safely and effectively.",
    image: "/images/client/revive/service-growth-hormone.png",
    icon: "📈",
    symptoms: [
      "Increased body fat, particularly around the waist",
      "Decreased muscle mass and strength",
      "Reduced bone density",
      "Fatigue, low energy, and poor stamina",
      "Thin, dry skin and premature wrinkles",
      "Poor exercise recovery and joint stiffness",
    ],
    process: [
      {
        step: 1,
        title: "IGF-1 & Hormone Testing",
        description:
          "We measure IGF-1 levels along with a complete hormone panel to assess your growth hormone status and identify any deficiencies.",
      },
      {
        step: 2,
        title: "Customized Protocol",
        description:
          "Based on your labs and symptoms, we design a protocol that may include growth hormone secretagogues, peptide therapy, or direct GH replacement.",
      },
      {
        step: 3,
        title: "Guided Treatment",
        description:
          "We walk you through the treatment process, proper administration, timing, and what to expect during the initial weeks of therapy.",
      },
      {
        step: 4,
        title: "Optimization & Monitoring",
        description:
          "Regular lab work and clinical assessments to ensure your growth hormone levels are optimizing and your symptoms are improving.",
      },
    ],
    faqs: [
      {
        question: "What causes growth hormone deficiency in adults?",
        answer:
          "Growth hormone production naturally declines with age, dropping roughly 14 percent per decade after age 30. Other causes include pituitary gland disorders, traumatic brain injury, radiation therapy, and chronic health conditions. Both natural aging and medical causes can benefit from treatment.",
      },
      {
        question: "How is growth hormone deficiency diagnosed?",
        answer:
          "We use a combination of symptom assessment and blood tests, primarily measuring IGF-1 levels which reflect your overall growth hormone production. Additional stimulation tests may be used in some cases to confirm the diagnosis.",
      },
      {
        question: "What results can I expect from treatment?",
        answer:
          "Patients typically experience improved body composition with reduced fat and increased lean muscle, better energy and stamina, improved skin quality, enhanced sleep, and stronger bones. Most patients notice changes within four to eight weeks, with continued improvement over several months.",
      },
      {
        question: "Is growth hormone therapy the same as steroids?",
        answer:
          "No. Growth hormone is a completely different molecule from anabolic steroids. It works through different pathways and has a different safety profile. Growth hormone therapy restores a hormone your body naturally produces, supporting overall health rather than just muscle growth.",
      },
    ],
    relatedSlugs: ["peptide-treatment", "testosterone-replacement-therapy", "hormonal-imbalance-therapy"],
  },
  {
    slug: "botox",
    title: "Botox Treatments",
    shortTitle: "Botox",
    description:
      "Smooth fine lines and wrinkles with expertly administered Botox injections. Our skilled providers deliver natural-looking results that refresh your appearance while maintaining your ability to express yourself naturally.",
    image: "/images/client/revive/service-botox.jpg",
    icon: "✨",
    symptoms: [
      "Forehead lines and frown lines (11s)",
      "Crow's feet around the eyes",
      "Bunny lines on the nose",
      "Chin dimpling and jawline tension",
      "Excessive sweating (hyperhidrosis)",
    ],
    process: [
      {
        step: 1,
        title: "Aesthetic Consultation",
        description:
          "We assess your facial anatomy, discuss your goals, and identify the treatment areas that will give you the most natural and impactful results.",
      },
      {
        step: 2,
        title: "Treatment Planning",
        description:
          "Your provider maps out precise injection points based on your unique facial structure. We determine the right number of units for each area.",
      },
      {
        step: 3,
        title: "Quick Treatment",
        description:
          "The injection process takes about 10 to 15 minutes. We use fine needles and can apply a topical numbing agent if desired. Most patients describe it as a minor pinch.",
      },
      {
        step: 4,
        title: "Follow-Up",
        description:
          "We schedule a two-week follow-up to assess results and make any touch-up adjustments if needed. Results typically last three to four months.",
      },
    ],
    faqs: [
      {
        question: "Will Botox make me look frozen or unnatural?",
        answer:
          "Not when done properly. Our providers are trained in conservative, natural-looking Botox techniques. The goal is to soften lines and wrinkles while preserving your natural facial expressions. We always err on the side of a natural appearance.",
      },
      {
        question: "How long does Botox last?",
        answer:
          "Results typically last three to four months. With regular treatments, many patients find their results last longer over time as the treated muscles gradually weaken. Most patients settle into a routine of treatments every three to four months.",
      },
      {
        question: "Is there any downtime after Botox?",
        answer:
          "There is virtually no downtime. You can return to most normal activities immediately. We recommend avoiding strenuous exercise, lying flat, and rubbing the treated area for the first 24 hours. Minor redness or swelling at injection sites resolves quickly.",
      },
      {
        question: "At what age should I start Botox?",
        answer:
          "There is no set age. Some patients in their late 20s use preventive Botox to slow the formation of dynamic wrinkles, while others begin in their 40s or 50s to address existing lines. The best time to start depends on your skin, genetics, and personal goals.",
      },
      {
        question: "Can Botox be combined with dermal fillers?",
        answer:
          "Yes. Botox and dermal fillers complement each other well. Botox addresses dynamic wrinkles caused by muscle movement, while fillers restore volume and smooth static lines. Many patients benefit from a combination approach for comprehensive facial rejuvenation.",
      },
    ],
    relatedSlugs: ["dermal-filler", "peptide-treatment", "iv-nutrient-therapy"],
  },
  {
    slug: "dermal-filler",
    title: "Dermal Filler Treatments",
    shortTitle: "Dermal Fillers",
    description:
      "Restore youthful volume and contour with premium dermal fillers. Our expert injectors use hyaluronic acid-based fillers to enhance lips, cheeks, jawline, and other areas for natural-looking, long-lasting results.",
    image: "/images/client/revive/service-dermal-filler.jpg",
    icon: "💎",
    symptoms: [
      "Hollow or sunken cheeks",
      "Thinning lips or loss of lip definition",
      "Nasolabial folds (smile lines)",
      "Marionette lines around the mouth",
      "Under-eye hollows and dark circles",
      "Loss of jawline definition",
    ],
    process: [
      {
        step: 1,
        title: "Facial Assessment",
        description:
          "Your provider evaluates your facial proportions, areas of volume loss, and aesthetic goals to determine the best filler type and placement.",
      },
      {
        step: 2,
        title: "Treatment Planning",
        description:
          "We select the appropriate filler product and volume for each area. Different areas require different filler consistencies for optimal results.",
      },
      {
        step: 3,
        title: "Precise Injection",
        description:
          "Using advanced techniques, we inject the filler into targeted areas. Topical numbing and filler containing lidocaine keep you comfortable throughout.",
      },
      {
        step: 4,
        title: "Assessment & Aftercare",
        description:
          "We review your results immediately after treatment and provide aftercare instructions. A two-week follow-up ensures you are happy with the outcome.",
      },
    ],
    faqs: [
      {
        question: "How long do dermal fillers last?",
        answer:
          "Duration depends on the product and treatment area. Lip fillers typically last 6 to 12 months, while cheek and jawline fillers can last 12 to 18 months. Some newer products last up to two years. Your metabolism and lifestyle factors also affect longevity.",
      },
      {
        question: "Are dermal fillers reversible?",
        answer:
          "Yes. Hyaluronic acid fillers, which are the type we primarily use, can be dissolved with an enzyme called hyaluronidase if you are unhappy with the results or experience any complications. This provides an important safety net.",
      },
      {
        question: "What is the recovery like after fillers?",
        answer:
          "Most patients experience mild swelling and possible bruising for one to three days. You can return to normal activities immediately, though we recommend avoiding strenuous exercise for 24 to 48 hours. Swelling resolves over the first week, revealing your final results.",
      },
      {
        question: "Will fillers look natural?",
        answer:
          "Our approach prioritizes natural-looking enhancement. We use conservative amounts and build gradually rather than over-filling. The goal is to look refreshed and rejuvenated, not overdone. We always recommend starting with less and adding more if desired.",
      },
      {
        question: "Which areas can be treated with dermal fillers?",
        answer:
          "Common treatment areas include lips, cheeks, nasolabial folds, marionette lines, under-eyes (tear troughs), jawline, chin, and temples. Fillers can also be used for hand rejuvenation and non-surgical nose reshaping.",
      },
    ],
    relatedSlugs: ["botox", "peptide-treatment", "iv-nutrient-therapy"],
  },
  {
    slug: "hair-restoration",
    title: "Hair Restoration Therapy",
    shortTitle: "Hair Restoration",
    description:
      "Combat hair thinning and hair loss with our advanced hair restoration treatments. We use a combination of regenerative therapies, peptides, and targeted treatments to stimulate natural hair growth and restore your confidence.",
    image: "/images/client/revive/wellness-woman.jpg",
    icon: "🌱",
    symptoms: [
      "Thinning hair on the crown or temples",
      "Receding hairline",
      "Excessive hair shedding during brushing or showering",
      "Widening part line",
      "Visible scalp through hair",
      "Patchy hair loss or bald spots",
    ],
    process: [
      {
        step: 1,
        title: "Scalp & Health Assessment",
        description:
          "We evaluate your scalp health, hair density, and pattern of loss. Blood work identifies any hormonal or nutritional factors contributing to hair loss.",
      },
      {
        step: 2,
        title: "Personalized Treatment Plan",
        description:
          "Based on your assessment, we design a multi-modal treatment plan that may include PRP therapy, peptide injections, topical treatments, and nutritional support.",
      },
      {
        step: 3,
        title: "Treatment Sessions",
        description:
          "Begin your treatment protocol with in-office sessions and at-home care. PRP treatments are typically scheduled monthly for the first three to four months.",
      },
      {
        step: 4,
        title: "Growth Monitoring",
        description:
          "We track your progress with photos and assessments, adjusting your protocol as needed. Most patients see new growth within two to four months.",
      },
    ],
    faqs: [
      {
        question: "What causes hair loss?",
        answer:
          "Hair loss can result from genetics (androgenetic alopecia), hormonal imbalances, thyroid disorders, nutritional deficiencies, stress, medications, and autoimmune conditions. Our evaluation process identifies the specific factors contributing to your hair loss so treatment can target the root cause.",
      },
      {
        question: "What treatments do you offer for hair restoration?",
        answer:
          "We offer PRP (platelet-rich plasma) therapy, peptide treatments that stimulate hair follicles, topical growth factors, nutritional optimization, and hormone balancing. The best approach depends on the cause and severity of your hair loss.",
      },
      {
        question: "How soon will I see results from hair restoration?",
        answer:
          "Hair growth is a gradual process. Most patients notice reduced shedding within the first month and begin to see new growth between two and four months. Significant improvement in density and thickness typically occurs between six and twelve months of consistent treatment.",
      },
      {
        question: "Is hair restoration effective for both men and women?",
        answer:
          "Yes. We treat hair loss in both men and women, though the patterns and causes often differ. Women tend to experience diffuse thinning while men typically see receding hairlines and crown thinning. Treatment plans are customized accordingly.",
      },
      {
        question: "Can hormonal imbalances cause hair loss?",
        answer:
          "Yes. Thyroid disorders, low iron, testosterone imbalances, and elevated DHT are all common hormonal contributors to hair loss. Our comprehensive blood work identifies these issues, and treating the underlying imbalance often helps restore healthy hair growth.",
      },
    ],
    relatedSlugs: ["hormonal-imbalance-therapy", "peptide-treatment", "bhrt"],
  },
];
