import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">JOIN THE COMMUNITY</h2>
          <p className="mb-8">Stay up to date with our latest news and updates</p>
          <form className="flex gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="bg-white text-black flex-1" />
            <Button className="bg-blue-600 hover:bg-blue-700">Submit</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

