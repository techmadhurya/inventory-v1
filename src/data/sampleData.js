// Import all images from the folder
const images = import.meta.glob("../assets/images/garlands/*.jpg", {
    eager: true,
    import: "default",
});

// Convert images object to sorted array
const imageArray = Object.entries(images)
    .sort((a, b) => {
        const numA = parseInt(a[0].match(/(\d+)\.jpg$/)[1]);
        const numB = parseInt(b[0].match(/(\d+)\.jpg$/)[1]);
        return numA - numB;
    })
    .map((img) => img[1]);

// Generate 93 objects
export const items = imageArray.map((img, index) => ({
    id: index + 1,
    itemName: `Garland ${index + 1}`,
    category: "garlands",
    price: "Rs 3000",
    location: "vendor",
    quantity: 1,
    itemStatus: "Available",
    tags: ["flower", "garland"],
    lastMoved: "2026-03-05",
    BookedDates: [],
    image: img,
}));