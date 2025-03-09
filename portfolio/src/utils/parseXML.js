export const fetchXMLData = async () => {
  try {
    const response = await fetch("../content.xml");
    const text = await response.text();

    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "text/xml");

    const data = Array.from(xml.getElementsByTagName("item")).map((item, index) => {
      const title = item.getElementsByTagName("title")[0]?.textContent || "";
      const subtitle = item.getElementsByTagName("subtitle")[0]?.textContent || "";
      const description = item.getElementsByTagName("description")[0]?.textContent || "";
      const images = Array.from(item.getElementsByTagName("image")).map((img) => img.textContent);
      const video = item.getElementsByTagName("video")[0]?.textContent || null;


      return { title, subtitle, description, images, video };
    });

    return data;
  } catch (error) {
    console.error("Error fetching XML:", error);
  }
};
