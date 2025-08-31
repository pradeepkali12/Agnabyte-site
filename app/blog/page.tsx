import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, User } from "lucide-react"
import { NavigationHeader } from "@/components/navigation-header"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "5 Signs Your Local Business Needs Digital Transformation",
    excerpt: "Discover the key indicators that it's time to modernize your business operations and embrace digital solutions for sustainable growth.",
    content: `Digital transformation isn't just a buzzword—it's a necessity for local businesses looking to thrive in today's competitive landscape. Here are five clear signs that your business is ready for digital transformation:

**1. Manual Processes Are Consuming Too Much Time**

If your team spends hours on tasks that could be automated—like inventory management, customer communications, or scheduling—it's time to digitize. Modern businesses use tools that handle these processes automatically, freeing up valuable time for strategic work.

**2. Customer Data Is Scattered Across Multiple Systems**

When customer information is stored in spreadsheets, filing cabinets, and various software tools, you're missing opportunities. A centralized customer management system provides insights that drive better decision-making and improved customer experiences.

**3. Competitors Are Gaining Ground Online**

If your competitors are attracting customers through their websites, social media, or online marketing while you rely solely on traditional methods, you're at a disadvantage. Digital presence isn't optional anymore—it's essential for visibility and credibility.

**4. You Can't Track Key Business Metrics**

Without data analytics, you're making decisions based on gut feelings rather than facts. Digital transformation provides real-time insights into sales trends, customer behavior, and operational efficiency.

**5. Scaling Operations Feels Impossible**

If growing your business means proportionally increasing manual work and overhead, you need scalable digital solutions. The right technology stack grows with your business without requiring constant restructuring.

**Taking the Next Step**

Digital transformation doesn't have to be overwhelming. Start with one area—whether it's customer management, online presence, or process automation—and build from there. The key is choosing solutions that fit your business size and goals.

At Agnabyte, we specialize in practical digital transformation that delivers real results. Our approach focuses on sustainable growth rather than flashy features that don't add value.`,
    author: "Sarah Johnson",
    date: "2025-08-15",
    readTime: 5,
    image: "/placeholder.jpg",
    tags: ["Digital Transformation", "Small Business", "Technology"]
  },
  {
    id: 2,
    title: "Data Analytics for Small Businesses: Start Simple, Think Big",
    excerpt: "Learn how to implement data analytics in your small business without breaking the budget or overwhelming your team.",
    content: `Data analytics might seem like something only large corporations can afford, but that's not true. Small businesses can—and should—use data to make better decisions. Here's how to get started without complexity or massive budgets.

**Why Small Businesses Need Analytics**

Every business generates data: sales transactions, customer interactions, website visits, social media engagement. This data contains insights that can improve your operations, increase sales, and reduce costs. The challenge is turning raw data into actionable information.

**Start With What You Have**

You don't need expensive enterprise software to begin. Most small businesses already have data in:
- Point-of-sale systems
- Website analytics (Google Analytics)
- Social media platforms
- Email marketing tools
- Customer relationship management (CRM) systems

**The Three Essential Metrics**

Focus on these core metrics first:

1. **Customer Acquisition Cost (CAC)**: How much you spend to gain a new customer
2. **Customer Lifetime Value (CLV)**: How much revenue a customer generates over time
3. **Monthly Recurring Revenue (MRR)**: Predictable income for planning and growth

**Tools That Don't Break the Bank**

- **Google Analytics**: Free website and customer behavior insights
- **Google Data Studio**: Free dashboard creation and visualization
- **Zapier**: Connects different tools to automate data collection
- **Simple spreadsheet templates**: For businesses just starting out

**Common Mistakes to Avoid**

Don't try to track everything at once. Start with 3-5 key metrics that directly impact your business goals. Avoid vanity metrics that look impressive but don't influence decision-making.

**Implementation Strategy**

1. **Week 1**: Set up basic tracking
2. **Week 2-4**: Collect baseline data
3. **Month 2**: Create your first dashboard
4. **Month 3**: Make your first data-driven decision

**The Bottom Line**

Data analytics for small businesses isn't about becoming a data scientist—it's about making informed decisions. Start simple, focus on metrics that matter, and gradually build your analytical capabilities as your business grows.`,
    author: "Michael Chen",
    date: "2025-08-10",
    readTime: 7,
    image: "/placeholder.jpg",
    tags: ["Data Analytics", "Small Business", "Business Intelligence"]
  },
  {
    id: 3,
    title: "Building SaaS Products That Actually Solve Business Problems",
    excerpt: "The key principles behind creating software-as-a-service solutions that customers love and businesses need.",
    content: `The SaaS market is crowded with solutions that promise everything but deliver complexity. Here's how we approach building SaaS products that actually solve real business problems.

**Problem-First Development**

Too many SaaS products start with a cool technology and then look for problems to solve. We flip this approach: identify genuine business pain points first, then build the simplest solution that addresses them effectively.

**The Agnabyte SaaS Philosophy**

1. **Solve One Problem Really Well**: Instead of building a Swiss Army knife, we create focused tools that excel at specific tasks.

2. **Keep It Simple**: Complexity is the enemy of adoption. If users need a manual to understand your core features, you've overcomplicated things.

3. **Scale Gradually**: Build for your current users' needs, not hypothetical future requirements. Add complexity only when your user base demands it.

**Real-World Example: Inventory Management**

A local retailer came to us drowning in spreadsheets and manual inventory tracking. Instead of building a comprehensive ERP system, we created a simple tool that:
- Tracks stock levels in real-time
- Sends alerts when items run low
- Integrates with their existing POS system
- Provides basic sales analytics

The result? 80% reduction in inventory errors and 3 hours saved per week on manual counting.

**Key Technical Principles**

**Reliability Over Features**: We prioritize uptime and data integrity over flashy features. A simple tool that works 99.9% of the time beats a feature-rich platform that crashes.

**Mobile-First Design**: Local business owners are often away from their desks. Our interfaces work seamlessly on phones and tablets.

**Integration-Ready**: New software should complement existing workflows, not replace them entirely.

**The Business Model**

Fair pricing is part of the solution. We believe in:
- Transparent pricing with no hidden fees
- Scaling costs with business growth
- No vendor lock-in—you own your data
- Local support when you need help

**Measuring Success**

We track user engagement, not just sign-ups. A successful SaaS product shows:
- High daily/weekly active usage
- Low churn rates
- Positive customer feedback
- Measurable business impact for users

**Looking Forward**

The future of SaaS for local businesses lies in simplicity, reliability, and genuine problem-solving. We're not interested in building the next unicorn—we're focused on creating tools that help real businesses succeed.`,
    author: "David Kumar",
    date: "2025-08-05",
    readTime: 6,
    image: "/placeholder.jpg",
    tags: ["SaaS Development", "Product Development", "Business Solutions"]
  }
]

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation Header */}
      <NavigationHeader />

      {/* Blog Header */}
      <section className="bg-gradient-to-b from-amber-50 to-white">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Agnabyte Blog
            </h1>
            <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
              Insights on digital transformation, business growth, and practical technology solutions for local businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 mb-4 hover:text-amber-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Stay Updated
          </h3>
          <p className="text-slate-600 mb-6">
            Get the latest insights on digital transformation and business growth delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md border border-slate-300 px-4 py-2 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
            <button className="rounded-md bg-amber-600 px-6 py-2 text-sm font-medium text-white hover:bg-amber-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-6 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <Image src="/images/agnabyte-logo.png" alt="Agnabyte logo" width={32} height={32} />
            <span className="font-sans text-sm font-semibold text-slate-900">Agnabyte</span>
          </div>
          <p className="text-center text-xs text-slate-600">
            © {new Date().getFullYear()} Agnabyte. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
