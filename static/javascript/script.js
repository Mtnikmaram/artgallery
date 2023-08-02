// کد JavaScript برای افزودن محصولات به سبد خرید و نمایش مودال

document.addEventListener('DOMContentLoaded', function() {
    const cartModalButton = document.getElementById('cartModalButton');
    const cartModal = document.getElementById('cartModal');
    const cartItemsList = document.getElementById('cartItems');
    const checkoutButton = document.getElementById('checkoutButton');
    let cartItems = []; // آرایه‌ای برای ذخیره محصولات اضافه‌شده به سبد خرید
  
    // تابعی برای افزودن محصول به سبد خرید
    function addToCart(productName, price) {
      cartItems.push({ name: productName, price: price });
      renderCartItems();
    }
  
    // تابعی برای رسم لیست محصولات سبد خرید در مودال
    function renderCartItems() {
      cartItemsList.innerHTML = '';
      cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.price} تومان`;
        cartItemsList.appendChild(listItem);
      });
    }
  
    // کلیک بر روی دکمه باز کردن مودال
    cartModalButton.addEventListener('click', function() {
      renderCartItems();
      cartModal.style.display = 'block';
    });
  
    // کلیک بر روی دکمه پرداخت
    checkoutButton.addEventListener('click', function() {
      // کد اجرای عملیات پرداخت...
      // اینجا می‌توانید با استفاده از جاوااسکریپت یا ارسال فرم به صفحه پرداخت، اقدام به پرداخت نمایید.
      alert('اطلاعات پرداخت ارسال شد!');
      // پاک کردن سبد خرید بعد از پرداخت موفق
      cartItems = [];
      renderCartItems();
    });
  
    // کلیک بر روی دکمه بستن مودال
    document.querySelectorAll('[data-dismiss="modal"]').forEach(button => {
      button.addEventListener('click', function() {
        cartModal.style.display = 'none';
      });
    });
  });
  