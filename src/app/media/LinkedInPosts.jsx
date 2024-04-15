// LinkedInPosts.jsx
import { useEffect, useState } from 'react';

const LinkedInPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const accessToken = 'oucntLDgVl0umDYd'; // Replace 'YOUR_ACCESS_TOKEN' with the actual access token
        const response = await fetch('https://api.linkedin.com/v2/me/posts', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'X-Restli-Protocol-Version': '2.0.0', // Ensure this header is included for API version 2
          },
        });
        const data = await response.json();
        setPosts(data.elements);
      } catch (error) {
        console.error('Error fetching LinkedIn posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>LinkedIn Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkedInPosts;
