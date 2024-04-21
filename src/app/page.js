import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Summary from "@/components/summary/Summary";
import AboutMe from "@/components/aboutme/AboutMe";

export default function Home() {
    return (
        <div>
            <Header/>
            <Hero/>
            <Summary/>
            <AboutMe/>
        </div>
    );
}
