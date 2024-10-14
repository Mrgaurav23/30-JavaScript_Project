const testimonial = [
    {
        userName: " Jennifer Thompson",

        imageUrl: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",

        usertext : "Apple's mobile devices are sleek, powerful, and innovative. The seamless integration between hardware and software sets them apart in the tech industry. I am consistently impressed by the user-friendly experience and cutting-edge technology that Apple delivers."
    },
    {
        userName: " - Sophia Adams",

        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfDF8MHx8fDA%3D",

        usertext : "I am extremely impressed with the mobile device from Apple. It exceeded all my expectations and has made my life so much easier. The sleek design and top-notch performance make it a must-have for anyone looking for quality and style."
    },
    {
        userName: " - Samantha Adams",

        imageUrl: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfDF8MHx8fDA%3D",

        usertext : "Apple offers the most innovative mobile solutions that are sleek, user-friendly, and reliable. Their cutting-edge technology always exceeds expectations and keeps me connected seamlessly. Whether for work or play, Apple's mobile products never disappoint."
    },
    {
        userName: " Samantha johnson",

        imageUrl: "https://images.unsplash.com/photo-1678286742832-26543bb49959?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        usertext : "I am extremely impressed with the innovative mobile solutions provided by Apple. Their attention to detail and user experience is exceptional. I can't imagine using any other mobile device now."
    },
    {
        userName: "- Emily Johnson",

        imageUrl: "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfDF8MHx8fDA%3D",

        usertext : "Apple's innovative mobile devices have revolutionized the tech industry. Their sleek design and seamless functionality make them a must-have for tech-savvy individuals. I can't imagine my life without my Apple products"
    },
];

const nameElement = document.querySelector(".nameing");
const imageElement = document.querySelector("img");
const textElement = document.querySelector(".text")

let idx = 0;

updateProfile();

function updateProfile(){
    const {userName,imageUrl,usertext} = testimonial[idx];
    imageElement.src = imageUrl;
    textElement.innerText = usertext;
    nameElement.innerText = userName;
    idx++;

    if (idx == testimonial.length) {
        idx = 0;
    }

    setTimeout(() => {
        updateProfile();
    },4000)
}

