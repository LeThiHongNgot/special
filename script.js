
const messageText = `Hi Cô (Thư Lương),
Là em N đây...
Nhân ngày 20/10, em xin chúc cô luôn mạnh khỏe, hạnh phúc và thành công trong sự nghiệp trồng người.
Chúc cô giáo của em luôn giữ vững niềm đam mê và nhiệt huyết với nghề.
Em biết ơn những bài học quý giá cô đã mang đến và luôn truyền cảm hứng cho em.`;

let index = 0;
const speed = 100; // Tốc độ xuất hiện mỗi chữ (milisecond)

// Hàm chạy hiệu ứng chữ
function typeWriter() {
    if (index < messageText.length) {
        document.getElementById("message").innerHTML += messageText.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

// Hàm tạo bong bóng
function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';

    // Đặt vị trí ngẫu nhiên cho bong bóng
    bubble.style.left = Math.random() * window.innerWidth + 'px';
    bubble.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Thay đổi thời gian nổi lên ngẫu nhiên

    document.body.appendChild(bubble);

    // Xóa bong bóng sau khi nổi lên xong
    bubble.addEventListener('animationend', () => {
        bubble.remove();
    });
}

// Hàm bắt đầu rơi bong bóng
function startBubbles() {
    // Tạo bong bóng mỗi 500ms
    setInterval(createBubble, 500);
}

// Hàm bắt đầu hiệu ứng
function startEffect() {
    document.getElementById("flower").style.opacity = 1; // Hiện bông hoa
    setTimeout(() => {
        document.getElementById("card").style.opacity = 1; // Hiện khung thiệp sau 1 giây
        typeWriter(); // Bắt đầu gõ chữ
        startBubbles(); // Bắt đầu hiệu ứng bong bóng
    }, 1000); // Đợi 1 giây sau khi bông hoa xuất hiện
    document.getElementById("startButton").style.display = 'none'; // Ẩn nút sau khi nhấn
}

// Gán sự kiện nhấn nút "Bắt Đầu"
document.getElementById("startButton").addEventListener("click", startEffect);
