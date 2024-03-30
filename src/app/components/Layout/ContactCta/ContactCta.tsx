import { Button } from "@/shadcnui/ui/button"

const ContactCta = () => {
  return (
    <section className="section-pattern">
      <div className="container">
        <div className="border-4 border-slate-200 bg-white rounded-lg p-10 relative">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl">Ready to build your next project with CodePandas?</h2>
              <p className="font-light text-slate-600">Experience the future of software development with CodePandas. Turn your ideas into Solution based product.</p>
            </div>
            <div>
              <Button className="max-w-auto text-xl p-6">
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCta;