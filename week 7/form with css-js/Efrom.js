document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('contact-form');
    const fileInput = document.getElementById('file-upload');
    const fileListContainer = document.getElementById('file-list-container');
    const submitBtn = form.querySelector('.btn-submit');

    // 1. Xử lý hiển thị tên file khi người dùng chọn
    fileInput.addEventListener('change', () => {
        fileListContainer.innerHTML = ''; // Xóa danh sách file cũ

        const files = fileInput.files;

        if (files.length === 0) {
            return;
        }

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            
            const fileItem = document.createElement('p');
            fileItem.textContent = file.name; 
            
            // Bạn có thể thêm nút xóa file ở đây nếu muốn
            // const removeBtn = document.createElement('span');
            // removeBtn.textContent = 'x';
            // removeBtn.style.cursor = 'pointer';
            // removeBtn.onclick = () => { /* logic xóa file */ };
            // fileItem.appendChild(removeBtn);

            fileListContainer.appendChild(fileItem);
        }
    });

    // 2. Xử lý Submit Form
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Ngăn form gửi đi theo cách truyền thống

        // Đặt trạng thái nút là "sending"
        submitBtn.classList.add('sending');
        submitBtn.disabled = true; // Vô hiệu hóa nút

        const formData = new FormData(form);

        // (Demo) Mô phỏng việc gửi dữ liệu và độ trễ mạng
        console.log('Dữ liệu Form đang được gửi đi...');
        for (const [key, value] of formData.entries()) {
            if (value instanceof File) {
                console.log(`${key}: ${value.name} (${value.size} bytes)`);
            } else {
                console.log(`${key}: ${value}`);
            }
        }

        // Chờ 2 giây để mô phỏng quá trình gửi đi
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Sau khi gửi xong, đặt trạng thái là "sent"
        submitBtn.classList.remove('sending');
        submitBtn.classList.add('sent');
        submitBtn.textContent = 'Sent!'; // Thay đổi text thành "Sent!"

        // Đợi thêm 2 giây rồi reset form
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Reset form và trạng thái nút
        form.reset();
        fileListContainer.innerHTML = '';
        submitBtn.classList.remove('sent');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send'; // Đặt lại text nút về "Send"

        console.log('Form đã được gửi và reset.');
    });
});