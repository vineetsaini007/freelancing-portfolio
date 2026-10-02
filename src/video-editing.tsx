import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { FadeIn } from "./components";

const plannedServices=[
  "Basic cuts with captions",
  "Podcast clipping reels",
  "UGC ad creative editing",
  "Daily vlogs",
  "Travel cinematic reels",
  "GRWM reel editing",
];

export function VideoEditingServicesPage(){
  return <main className="video-services-page">
    <nav aria-label="Video editing page navigation">
      <a href="/#services"><ArrowLeft size={18}/> Back to services</a>
      <a href="/#contact">Start a project <ArrowUpRight size={18}/></a>
    </nav>
    <section className="video-services-hero">
      <FadeIn><p>Video editing / Coming soon</p></FadeIn>
      <FadeIn delay={0.1}><h1>Editing services and examples are on the way.</h1></FadeIn>
      <FadeIn delay={0.2}><p className="video-services-intro">This page is ready for detailed packages, process notes, and before-and-after examples. For now, here is the service lineup.</p></FadeIn>
      <div className="video-services-index">
        {plannedServices.map((service,index)=><FadeIn key={service} delay={index*0.06}>
          <article><span>{String(index+1).padStart(2,"0")}</span><h2>{service}</h2></article>
        </FadeIn>)}
      </div>
      <FadeIn><a className="video-page-cta" href="/#contact">Discuss a video project <ArrowUpRight size={20}/></a></FadeIn>
    </section>
  </main>;
}
