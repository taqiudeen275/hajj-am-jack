"use server";

import pb from "@/lib/my_pb";


export async function get3Blog() {
    try {
      const res = await pb.client.collection('Post').getFullList({
        sort: '-created',
    });
      console.log(res);
      return res
    } catch (error) {
      console.log(error)
      return []
    }
  }

  
export async function get5Gallery() {
    try {
      const res = await pb.client.collection('Gallery').getFullList({
        sort: '-created',
    });
      console.log(res);
      return res
    } catch (error) {
      console.log(error)
      return []
    }
  }

export async function getBlog() {
    try {
      const res = await pb.client.collection('Post').getFullList({
        sort: '-created',
    });
      console.log(res);
      return res
    } catch (error) {
      console.log(error)
      return []
    }
  }

  
export async function getFAQ() {
  try {
    const res = await pb.client.collection('FAQ').getFullList({
      sort: '-created',
  });
    console.log(res);
    return res
  } catch (error) {
    console.log(error)
    return []
  }
}
  
export async function getSingleBlog(id: string) {
    const res = await pb.client.collection('Post').getOne(id);
    console.log(res);
    return res 
}


  
export async function getGallery() {
    try {
      const res = await pb.client.collection('Gallery').getFullList({
        sort: '-created',
    });;
      console.log(res);
      return res
    } catch (error) {
      console.log(error)
      return []
    }
  }
  
export async function getMultiGallery() {
  try {
    const res = await pb.client.collection('MultiplePicGallery').getFullList({
      sort: '-created',
  });;
    console.log(res);
    return res
  } catch (error) {
    console.log(error)
    return []
  }
}
  export async function getAuthor() {
    try {
      const res = await pb.client.collection('Author').getFullList({
        sort: '-created',
    });;
      console.log(res);
      return res
    } catch (error) {
      console.log(error)
      return []
    }
  }
  
  