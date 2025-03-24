import React from 'react'

const Blog = ({posts}:BlogListGridProps) => {
  
    return (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-16">
            <div className="my-8 ">
                <h1 className='text-center font-extrabold text-primary text-5xl pb-4'>Blog</h1>
                <BlogListGrid posts={posts} />
            </div>
            </div>
        </>
    )
}

export default Blog

// components/BlogListGrid.tsx
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

export interface BlogPost {
    id: string;
    overview: string;
    title: string;
    date: string;
    author: string;
    authorPhoto: string;
    coverImage: string;
}

interface BlogListGridProps {
    posts: BlogPost[];
}

const BlogListGrid: React.FC<BlogListGridProps> = ({ posts }) => {
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
                <Link href={`/blog/view/${post.id}`} key={post.id} className=" w-[350px]  hover:text-primary">
                    <Image
                        src={post.coverImage}
                        alt={`Cover Image for ${post.title}`}
                        width={800}
                        height={800}
                        className="w-full h-[300px] rounded-sm object-cover hover:scale-[1.1] transition-all"
                    />
                    <div className="p-4">
                        <h3 className="mb-2 text-xl font-bold">{post.title}</h3>
                        <div className='flex items-center gap-8'>
                            <p className="mb-4 text-gray-700 flex items-center uppercase gap-2"> 
                             <Avatar>
                                <AvatarImage src={post.authorPhoto} alt="Author Photo" /> 
                                <AvatarFallback>AP</AvatarFallback>
                            </Avatar> {post.author}</p>
                            <p className="mb-4 text-gray-600">{post.date}</p>
                        </div>
                        {/* Add a link or additional content for each post */}
                    </div>
                </Link>
            ))}
        </div>
    );
};
