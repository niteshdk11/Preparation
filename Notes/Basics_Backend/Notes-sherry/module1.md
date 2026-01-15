# Internet Notes

## 1. **IP Address**

### Hinglish:
- IPv4 aur IPv6 ke do versions hote hain. IP address DHCP (Dynamic Host Configuration Protocol) ke through diya jata hai jo ISP (Internet Service Provider) ke dwara provide kiya jata hai.
- IP address globally identify hota hai.

### English:
- There are two versions of IP addresses: IPv4 and IPv6. The IP address is provided by DHCP (Dynamic Host Configuration Protocol), which is assigned by the ISP (Internet Service Provider).
- It is globally recognized as an identity.

---

## 2. **MAC Address / Physical Address**

### Hinglish:
- Har device ke pass ek physical address hota hai, jo MAC address kehlata hai.
- MAC address WAN ya Wi-Fi ke liye hota hai.

### English:
- Every device has a physical address known as the MAC address.
- The MAC address is used for identifying devices over WAN or Wi-Fi networks.

---

## 3. **Proxy**

### Hinglish:
- Proxy client side par hota hai. Jaise agar A ko B se baat karni hai, hum A ko bolenge pehle C se baat kare, aur phir C ko bolenge B se baat kare.
- Kuch websites jo allow nahi hoti khulne ke liye, hum third person ke through proxy ka istemal karte hain.

### English:
- A proxy is set on the client side. If A wants to communicate with B, we tell A to talk to C, and then C communicates with B.
- If certain websites are blocked, we use a third-party proxy to access them.

---

## 4. **Reverse Proxy**

### Hinglish:
- Reverse proxy server side par hota hai. Request actual server pe pahuchne se pehle reverse proxy par jati hai.
- Reverse proxy ka fayda ye hai ki pehle request ko check kiya jata hai, koi malicious data toh nahi, ya DDOS attack ke liye repeat ho rahi hai ya nahi.

### English:
- A reverse proxy is set up on the server side. Requests go through the reverse proxy before reaching the actual server.
- It helps to check the request for malicious content or to prevent repetitive requests, such as in the case of DDOS attacks.

---

## 5. **VPN (Virtual Private Network)**

### Hinglish:
- VPN bhi proxy jaisa hi hota hai, jaise A --> C --> B, lekin proxy ke data encrypt nahi hota aur directly padha ja sakta hai.
- VPN mein data encrypt hota hai aur directly readable nahi hota.

### English:
- A VPN is similar to a proxy where A connects to C and then C connects to B, but in the case of a proxy, the data is not encrypted and can be read directly.
- In a VPN, the data is encrypted and not easily readable.

---

## 6. **Server**

### Hinglish:
- Server ek computer system hota hai jo programmed hota hai request ko accept karne aur response dene ke liye. Internet se connected hota hai aur data ya files share kar sakta hai.

### English:
- A server is a computer system programmed to accept requests and send responses. It should be connected to the internet and can share or accept data/files.

---

## 7. **Client**

### Hinglish:
- Client wo system hota hai jo server se request bhejta hai aur response leta hai.

### English:
- A client is the system that sends requests to the server and receives responses.

---

## 8. **Protocol**

### Hinglish:
- Protocol ek standard set of rules hota hai jo data communication ke liye use hota hai.

### English:
- A protocol is a standard set of rules used for data communication.

---

## 9. **ISP (Internet Service Provider)**

### Hinglish:
- ISP vo company hoti hai jo internet service provide karti hai jaise ki Airtel, Jio, etc.

### English:
- An ISP is a company that provides internet services, like Airtel, Jio, etc.

---

## 10. **TCP (Transmission Control Protocol)**

### Hinglish:
- TCP me jab aap data bhejte ho, to uska acknowledgement milta hai ki data pahuncha ki nahi. Yeh slow hota hai lekin data delivery ka dhyaan rakhta hai.

### English:
- In TCP, when you send data, you get an acknowledgment that the data has been received. It's slower but ensures reliable data delivery.

---

## 11. **UDP (User Datagram Protocol)**

### Hinglish:
- UDP me data bhejne ke baad acknowledgement nahi milta. Iska kaam jaldi se data stream karna hai jaise streaming services.

### English:
- In UDP, there is no acknowledgment after sending data. Its purpose is to send data quickly, often used in streaming services.

---

## 12. **HTTP Versions**

- **V1**: Conjection issues. Router slow data transmission.
  
- **V2**: Faster than V1, but still slow for modern use.

- **V3**: Combines TCP/IP with UDP for better performance.