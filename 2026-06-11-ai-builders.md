# AI Builders Digest — June 11, 2026

## X / TWITTER

### Andrej Karpathy (@karpathy)
This is a super exciting release - Claude Fable 5 is the same underlying model as Mythos but with added safeguards. The benchmarks are great and it's SOTA on everything by a margin but I'll add that *qualitatively* also, this is a major-version-bump-deserving step change forward (imo of the same order as Claude 4.5 was in November), peaking especially for long problem-solving sessions on very difficult problems. You can give it a lot more ambitious tasks than what you're used to, the model "gets it" and it will just go, and it's never felt this tempting to stop looking at the code at all (but don't do this in prod!). The model still has quirks that people will run into and the safeguards are configured to be a little too trigger happy for launch, which can hopefully be tuned over time.

I feel a lot of things changing as working software increasingly comes out on a tap. The Jevon's paradox kicks in and I feel my own demand for software growing substantially. You can ask for anything - explainers, visualizers, dashboards, bespoke single-use apps (e.g. a full wandb that is hyper-specific just for your project), you can 10X your test suite, auto-optimize code, run giant research projects with custom HTML for the results, anything! "Free your mind" (Matrix ref). Really looking forward to all the things people build!

https://x.com/karpathy/status/2064409694761054332

### Boris Cherny (@bcherny)
Fable 5 is the biggest step up I've felt in our models since Opus 4.5 back in November. After 4.5 came out I uninstalled my IDE when I realized that I'd been doing 100% of my coding in a terminal for a few weeks. With Fable, it's felt like Claude has stepped up from being a coding agent to a thought and design partner in building the product. Fable has judgement, taste, and dimensionality in a way that previous models didn't, leading me to trust it more with the most complex work.

I think the first time I had this realization was when I asked Fable to debug something. It is the first model I have used that was so methodical and precise, taking measurements and adding logs then verifying that it truly fixed the issue before declaring victory.

There's nothing in claude code's prompting telling the model to do that, it's just part of its personality. It really has this "big model smell" that I haven't felt before.

https://x.com/bcherny/status/2064431111154053187

### Dan Shipper (@danshipper)
FABLE (MYTHOS) is OUT!

we've been testing for a week @every. here's our vibe check: https://t.co/ZdceXz3apU https://t.co/jZ2690Th1G

VIBE CHECK: Claude Fable 5 IS OUT! https://t.co/dGVuRlK7H8

@every watch on YouTube: https://t.co/SOW9nt2wC7

https://x.com/danshipper/status/2064395167658860859

### Alex Albert (@alexalbert__)
I've been at Anthropic through every model launch. There's been a few cases I can remember of a launch that stands out and marks a step-change in how we use models:
- Claude Opus 3
- Claude Sonnet 3.5
- Claude Opus 4.5

And now Claude Fable 5.

With Fable, the model stopped feeling like a tool I direct and started feeling more like something I collaborate with.

https://x.com/alexalbert__/status/2064394410004304003

### Aaron Levie (@levie)
If you thought AI progress was slowing down, well here's the immediate answer to that. Huge jump in capability across the board. This is going to deliver major improvement in agents across almost all knowledge work categories.

https://x.com/levie/status/2064396746953023647

### Garry Tan (@garrytan)
Fable 5 is the biggest model energy I've ever seen

https://x.com/garrytan/status/2064573857911152710

### Zara Zhang (@zarazhangrui)
I will be doing a virtual talk this Friday on my vibe coding process. 

As a non-technical person who has somehow managed to get 30k stars on GitHub, I will be sharing the behind-the-scenes of how I get product ideas, how I work with coding agents, how to design stuff that's not AI slop, and why I think code is a medium for storytelling. 

RSVP here https://t.co/4wxpJjrAAB (Use the code PREMIUMPASS under "Add a coupon" to access the event for free)

(Thanks to @sariazout and the @wwwsublimeapp community for hosting)

https://x.com/zarazhangrui/status/2064486120386379950

## OFFICIAL BLOGS

No new blog posts today.

## PODCASTS

### AI & I by Every - "We Automated Everything With AI and Tripled Our Headcount"
**The Takeaway**: Automation with AI actually increases demand for human experts rather than replacing them, as the glut of AI-generated work requires expert oversight and quality control.

Dan Shipper and Brandon discuss why, despite being deeply AI-native, their company Every has grown from 4 to 30 people since GPT-3. They explore the paradox that more automation creates more human work, arguing that AI makes yesterday's expert competence cheap but creates demand for experts to ensure quality and handle novel situations.

Key insights include:
- AI makes yesterday's expertise widely available but creates a glut of "kind of right" content that needs expert review
- The further an agent gets from human oversight, the less valuable it becomes
- Companies that blame AI for layoffs are often using it as cover for poor performance
- The key is to "ride the models" - learn to use new tools as they emerge to do better, more fulfilling work

https://www.youtube.com/playlist?list=PLuMcoKK9mKgHtW_o9h5sGO2vXrffKHwJL

Generated through the Follow Builders skill: https://github.com/zarazhangrui/follow-builders