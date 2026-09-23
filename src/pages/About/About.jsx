export default function About() {
  return (
    <div className="container-content py-14 max-w-2xl">
      <p className="eyebrow mb-2">About Akademix</p>
      <h1 className="font-display text-4xl text-ink mb-6">
        A global academic guidance ecosystem.
      </h1>
      <p className="text-slate leading-relaxed">
        Akademix connects students — from Class 10 through higher studies and professional
        education — with the subjects, universities, professors and mentors that match where
        they're headed. This build is a frontend prototype: professor and university profiles are
        demo data, structured so a real backend can plug in without reshaping the product.
      </p>
      <p className="text-slate leading-relaxed mt-4">
        The central idea is simple: tell us where you are, what you want to learn, and where you
        want to go — and we'll help you find the right academic path and the right expert.
      </p>
    </div>
  )
}
