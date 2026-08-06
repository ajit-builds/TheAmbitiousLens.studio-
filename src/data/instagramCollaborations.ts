export interface InstagramCollaboration {
  id: string;
  name: string;
  username: string;
  followers: string;
  profileImage: string;
  instagramUrl: string;
}

export const instagramCollaborations: InstagramCollaboration[] = [
  {
    id: 'collab-1',
    name: 'Trifid Media',
    username: 'trifidmedia',
    followers: '1.4M Followers',
    profileImage: '/images/collaborations/trifidmedia.png',
    instagramUrl: 'https://www.instagram.com/trifidmedia/'
  },
  {
    id: 'collab-2',
    name: 'Kallaway Marketing',
    username: 'kallawaymarketing',
    followers: '68.1K Followers',
    profileImage: '/images/collaborations/kallawaymarketing.png',
    instagramUrl: 'https://www.instagram.com/kallawaymarketing/'
  },
  {
    id: 'collab-3',
    name: 'Metro Media House',
    username: 'metromedia.house',
    followers: '129K Followers',
    profileImage: '/images/collaborations/metromedia-house.png',
    instagramUrl: 'https://www.instagram.com/metromedia.house/'
  },
  {
    id: 'collab-4',
    name: 'Steven',
    username: 'steven',
    followers: '5.2M Followers',
    profileImage: '/images/collaborations/steven.png',
    instagramUrl: 'https://www.instagram.com/steven/'
  },
  {
    id: 'collab-5',
    name: 'Starbucks India',
    username: 'starbucksindia',
    followers: '638K Followers',
    profileImage: '/images/collaborations/starbucksindia.png',
    instagramUrl: 'https://www.instagram.com/starbucksindia/'
  },
  {
    id: 'collab-6',
    name: 'Tharun Naik',
    username: 'tharunnaik.0',
    followers: '300K Followers',
    profileImage: '/images/collaborations/tharunnaik.png',
    instagramUrl: 'https://www.instagram.com/tharunnaik.0/'
  },
  {
    id: 'collab-7',
    name: 'District Culture',
    username: 'districtculture',
    followers: '218K Followers',
    profileImage: '/images/collaborations/districtculture.png',
    instagramUrl: 'https://www.instagram.com/districtculture/'
  },
  {
    id: 'collab-8',
    name: 'Emirates',
    username: 'emirates',
    followers: '8.9M Followers',
    profileImage: '/images/collaborations/emirates.png',
    instagramUrl: 'https://www.instagram.com/emirates/'
  }
];
