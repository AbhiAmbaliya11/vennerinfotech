import { verifyAdminToken } from "@/lib/adminAuth";
import { getSupabase } from "@/lib/supabase";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const EXISTING_PROJECTS = [
  { title: "Vira Care",              category: "Shopify",            url: "https://vira-care.co.uk/",                          image: "/images/portfolio/ecommerce-mockup.png",  tag: "Health & Wellness",   featured: true,  sort_order: 1  },
  { title: "Engravables",            category: "Shopify",            url: "https://engravables.ca/",                           image: "/images/portfolio/ecommerce-mockup.png",  tag: "Custom Gifting",      featured: false, sort_order: 2  },
  { title: "Cosmo Essentials India", category: "Shopify",            url: "https://cosmoessentialsindia.com/",                 image: "/images/portfolio/ecommerce-mockup.png",  tag: "Cosmetics",           featured: false, sort_order: 3  },
  { title: "Peach Petals",           category: "Shopify",            url: "https://peachpetals.in/",                           image: "/images/portfolio/ecommerce-mockup.png",  tag: "Fashion",             featured: false, sort_order: 4  },
  { title: "Wine Online Delivery",   category: "Shopify",            url: "https://wineonlinedelivery.com/",                   image: "/images/portfolio/ecommerce-mockup.png",  tag: "Beverages",           featured: false, sort_order: 5  },
  { title: "Iraah",                  category: "Shopify",            url: "https://iraah.co/",                                 image: "/images/portfolio/ecommerce-mockup.png",  tag: "Lifestyle",           featured: false, sort_order: 6  },
  { title: "Tykun",                  category: "Shopify",            url: "https://tykun.co/",                                 image: "/images/portfolio/ecommerce-mockup.png",  tag: "Apparel",             featured: false, sort_order: 7  },
  { title: "Vanue Glams",            category: "Shopify",            url: "https://vanueglams.com/",                           image: "/images/portfolio/ecommerce-mockup.png",  tag: "Beauty",              featured: false, sort_order: 8  },
  { title: "Einnosys",               category: "WordPress",          url: "https://www.einnosys.com/",                         image: "/images/portfolio/corporate-mockup.png",  tag: "IT Services",         featured: true,  sort_order: 9  },
  { title: "AccuMedic",              category: "WordPress",          url: "https://accumedic.in",                              image: "/images/portfolio/corporate-mockup.png",  tag: "Healthcare",          featured: false, sort_order: 10 },
  { title: "The Brand Landmark",     category: "WordPress",          url: "https://thebrandlandmark.com/",                     image: "/images/portfolio/corporate-mockup.png",  tag: "Branding",            featured: false, sort_order: 11 },
  { title: "Waffle Castle",          category: "WordPress",          url: "https://wafflecastle.in/",                          image: "/images/portfolio/corporate-mockup.png",  tag: "Food & Café",         featured: false, sort_order: 12 },
  { title: "Diara Jewel",            category: "WordPress",          url: "https://diarajewel.com/",                           image: "/images/portfolio/corporate-mockup.png",  tag: "Jewellery",           featured: false, sort_order: 13 },
  { title: "React Native Expert",    category: "WordPress",          url: "https://reactnativeexpert.com/",                    image: "/images/portfolio/corporate-mockup.png",  tag: "Tech Blog",           featured: false, sort_order: 14 },
  { title: "Diabetes Pharmacy UK",   category: "WordPress",          url: "https://diabetespharmacy.co.uk/",                   image: "/images/portfolio/corporate-mockup.png",  tag: "Pharmacy",            featured: false, sort_order: 15 },
  { title: "Aghora Wellness",        category: "WordPress",          url: "https://aghorawellness.com/",                       image: "/images/portfolio/corporate-mockup.png",  tag: "Wellness",            featured: false, sort_order: 16 },
  { title: "Padosi Babu",            category: "WordPress",          url: "https://padosibabu.com/",                           image: "/images/portfolio/corporate-mockup.png",  tag: "Food Delivery",       featured: false, sort_order: 17 },
  { title: "Chandra Fashion",        category: "Laravel",            url: "https://chandrafashion.co.in",                     image: "/images/portfolio/dashboard-mockup.png",  tag: "Fashion Portal",      featured: true,  sort_order: 18 },
  { title: "Mahadev Saree Service",  category: "Laravel",            url: "https://mahadevsareeservice.com/",                  image: "/images/portfolio/dashboard-mockup.png",  tag: "Saree Retail",        featured: false, sort_order: 19 },
  { title: "Hari Badai Dairy CRM",   category: "Laravel",            url: "http://crm.haribadairyfarm.com",                   image: "/images/portfolio/dashboard-mockup.png",  tag: "CRM System",          featured: false, sort_order: 20 },
  { title: "AccuMedic App",          category: "Laravel",            url: "https://app.accumedic.in/",                         image: "/images/portfolio/dashboard-mockup.png",  tag: "Healthcare CRM",      featured: false, sort_order: 21 },
  { title: "FinsphereAI CRM",        category: "Laravel",            url: "https://app.crm.finsphereai.com/",                  image: "/images/portfolio/dashboard-mockup.png",  tag: "FinTech CRM",         featured: false, sort_order: 22 },
  { title: "Food Mohallaa",          category: "Digital Marketing",  url: "https://www.instagram.com/foodmohallaa/",           image: "/images/portfolio/social-mockup.png",     tag: "Food Brand",          featured: true,  sort_order: 23 },
  { title: "Peach Petals Official",  category: "Digital Marketing",  url: "https://www.instagram.com/peachpetalsofficial/",    image: "/images/portfolio/social-mockup.png",     tag: "Fashion",             featured: false, sort_order: 24 },
  { title: "Waffle Castle Official", category: "Digital Marketing",  url: "https://www.instagram.com/waffle_castle_official/", image: "/images/portfolio/social-mockup.png",     tag: "Café",                featured: false, sort_order: 25 },
  { title: "AccuMedic Care",         category: "Digital Marketing",  url: "https://www.instagram.com/accumediccare/",          image: "/images/portfolio/social-mockup.png",     tag: "Healthcare",          featured: false, sort_order: 26 },
  { title: "BharatSaj",              category: "Digital Marketing",  url: "https://www.instagram.com/bharatsaj_/",             image: "/images/portfolio/social-mockup.png",     tag: "Lifestyle",           featured: false, sort_order: 27 },
  { title: "Engravables CA",         category: "Digital Marketing",  url: "https://www.instagram.com/engravables.ca/",         image: "/images/portfolio/social-mockup.png",     tag: "Gifting",             featured: false, sort_order: 28 },
  { title: "Prabhat NX",             category: "Digital Marketing",  url: "https://www.instagram.com/prabhatnx_/",             image: "/images/portfolio/social-mockup.png",     tag: "Brand",               featured: false, sort_order: 29 },
  { title: "Vortech Energy",         category: "Digital Marketing",  url: "https://www.instagram.com/vortech.energy/",         image: "/images/portfolio/social-mockup.png",     tag: "Energy",              featured: false, sort_order: 30 },
  { title: "Mangaldeep Surat",       category: "Digital Marketing",  url: "https://www.instagram.com/mangaldeep_surat/",       image: "/images/portfolio/social-mockup.png",     tag: "Local Business",      featured: false, sort_order: 31 },
  { title: "Her Valley Foods",       category: "Digital Marketing",  url: "https://www.instagram.com/hervalleyfoods/",         image: "/images/portfolio/social-mockup.png",     tag: "Food",                featured: false, sort_order: 32 },
  { title: "Shiza Surat",            category: "Digital Marketing",  url: "https://www.instagram.com/shiza.surat/",            image: "/images/portfolio/social-mockup.png",     tag: "Fashion",             featured: false, sort_order: 33 },
  { title: "Helly Fashion Surat",    category: "Digital Marketing",  url: "https://www.instagram.com/helly_fashion_surat/",    image: "/images/portfolio/social-mockup.png",     tag: "Fashion",             featured: false, sort_order: 34 },
];

export async function POST() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;
    if (!(await verifyAdminToken(token))) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const rows = EXISTING_PROJECTS.map((p) => ({
      title: p.title,
      category: p.category,
      url: p.url,
      image: p.image,
      tag: p.tag,
      featured: p.featured,
      sort_order: p.sort_order,
      status: "published",
    }));

    const { data, error } = await getSupabase()
      .from("portfolio")
      .insert(rows)
      .select("id");

    if (error) throw error;

    revalidatePath("/portfolio");
    return Response.json({ seeded: data?.length ?? 0 });
  } catch (err) {
    console.error("[Portfolio Seed]", err);
    return Response.json({ error: "Seed failed: " + err.message }, { status: 500 });
  }
}
