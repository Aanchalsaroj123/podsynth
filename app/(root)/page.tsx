// "use client";
// import PodcastCard from '@/components/PodcastCard';
// import { useQuery } from "convex/react";
// import { api } from "@/convex/_generated/api";
// import LoaderSpinner from '@/components/LoaderSpinner';
// import EmblaCarousel from '@/components/Carousel';

// const Home = () => {
//   const latestPodcasts = useQuery(api.podcasts.getLatestPodcasts);
//   const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);

//   if (!latestPodcasts || !trendingPodcasts) return <LoaderSpinner />

//   // Get the first three podcasts for the carousel
//   const topThreePodcasts = latestPodcasts.slice(0, 3);

//   return (
//     <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
//       
//       <section className='flex flex-col gap-5'>
//         {/* Slider section at the top */}
        // <h1 className="text-20 font-bold text-white-1">Latest Podcasts</h1>
        // <EmblaCarousel
        //   fansLikeDetail={topThreePodcasts.map(({ _id, podcastTitle, imageUrl }) => ({
        //     _id,
        //     podcast: [{ podcastTitle, podcastId: _id }],
        //     imageUrl,
        //     totalPodcasts: 1, // Each item is a single podcast
        //   }))}
        // />

//         <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
//         <div className="podcast_grid">
//           {trendingPodcasts.map(({ _id, podcastTitle, podcastDescription, imageUrl }) => (
//             <PodcastCard 
//               key={_id}
//               imgUrl={imageUrl as string}
//               title={podcastTitle}
//               description={podcastDescription}
//               podcastId={_id}
//             />
//           ))}
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Home;

"use client";
import PodcastCard from '@/components/PodcastCard'
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import LoaderSpinner from '@/components/LoaderSpinner';
import EmblaCarousel from '@/components/Carousel';

const Home = () => {
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);
  const latestPodcasts = useQuery(api.podcasts.getLatestPodcasts);

  if (!latestPodcasts || !trendingPodcasts) return <LoaderSpinner />
  const topThreePodcasts = latestPodcasts.slice(0, 3);
  
  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className='hidden md:flex flex-col gap-5 md:overflow-hidden'>
  <h1 className="text-20 font-bold text-white-1">Latest Podcasts</h1>
  <EmblaCarousel
    fansLikeDetail={topThreePodcasts.map(({ _id, podcastTitle, imageUrl }) => ({
      _id,
      podcast: [{ podcastTitle, podcastId: _id }],
      imageUrl,
      totalPodcasts: 1, // Each item is a single podcast
    }))}
  />
</section>

      <section className='flex flex-col gap-5'>
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>

        <div className="podcast_grid">
          {trendingPodcasts?.map(({ _id, podcastTitle, podcastDescription, imageUrl }) => (
            <PodcastCard 
              key={_id}
              imgUrl={imageUrl as string}
              title={podcastTitle}
              description={podcastDescription}
              podcastId={_id}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home