"use client"
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { getSingleBlog } from '@/app/action';
import { BlogSinglePost, mapToSingleBlogPost } from '@/lib/special_functions';
import LoadingAnimation from '@/components/loading_animation';

const BlogPostView: React.FC = () => {
    const params = useParams<{ id: string }>();
    const [isLoading, setIsLoading] = useState(true);
    const [post, setPost] = useState<BlogSinglePost>({
        id: "Not loaded",
        title: "Not loaded",
        date: "Not loaded",
        overview: "Not loaded",
        content: "Not loaded",
        author: "Not loaded",
        authorPhoto: "Not loaded",
        coverImage: "Not loaded",
    });
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchInitialData = async () => {
            if (!params?.id) return;

            try {
                setIsLoading(true);
                const post_res = await getSingleBlog(params.id);
                const temp_post = await mapToSingleBlogPost(post_res);
                setPost(temp_post);
                setError(null);
            } catch (error) {
                console.error("Failed to fetch blog post:", error);
                setError("Failed to load blog post");
            } finally {
                setIsLoading(false);
            }
        }

        fetchInitialData();
    }, [params?.id]);

    if (isLoading) {
        return (
            <div className="py-14 flex justify-center items-center">
                <LoadingAnimation />
            </div>
        );
    }

    if (error) {
        return (
            <div className="py-14 flex justify-center items-center text-red-500">
                {error}
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 mb-12">
            <div className='h-[70px] mb-16'></div>
            <h1 className='text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-tr from-green-400 to-green-800'>
                {post.title}
            </h1>
            <div className='flex items-center justify-center gap-8'>
                <p className="mb-4 text-gray-700 flex items-center uppercase gap-2">
                    <Avatar>
                        <AvatarImage src={post.authorPhoto} alt="Author Photo" />
                        <AvatarFallback>AP</AvatarFallback>
                    </Avatar> 
                    {post.author}
                </p>
                <p className="mb-4 text-gray-600">{post.date}</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <Image
                    src={post.coverImage}
                    alt={`Cover Image for ${post.title}`}
                    width={1000}
                    height={1000}
                    className="w-[80%] h-[400px] rounded-sm object-cover mb-12 transition-all"
                />
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
    )
}

export default BlogPostView