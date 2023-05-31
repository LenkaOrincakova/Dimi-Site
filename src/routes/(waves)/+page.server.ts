import { yearsOfExperience, entries as experienceEntries } from '$lib/data/experience';
import { filteredPosts } from '$lib/data/blog-posts';

export async function load() {
  const posts = filteredPosts.slice(0, 4);

  return {
    yearsOfExperience,
    experienceEntries,
     posts
  };
}
