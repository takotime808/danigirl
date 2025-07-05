const baseUrl = 'https://raw.githubusercontent.com/takotime808/danigirl/refs/heads/main/images';

export const allImages = Array.from({ length: 18 }, (_, i) => `${baseUrl}/${i + 1}.webp`);

export const galleryByRegion: Record<string, string[]> = {
  hawaii: allImages.slice(0, 6),
  california: allImages.slice(6, 12),
  newyork: allImages.slice(12, 18),
};
