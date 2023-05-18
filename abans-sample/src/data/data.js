export const authorizedUsers = [
  { username: 'user', password: 'password' },
  { username: 'admin', password: 'admin' },
];

export const brandOptions = [
  { id: 'lg', name: 'LG', logo: 'https://1000logos.net/wp-content/uploads/2017/03/LG-Logo-2014.png', link: 'brand/lg' },
  { id: 'whirlpool', name: 'Whirlpool', logo: 'https://1000logos.net/wp-content/uploads/2017/12/whirlpool-symbol.jpg', link: 'brand/whirlpool' },
  { id: 'apple', name: 'Apple', logo: 'https://www.vectorlogo.zone/logos/apple/apple-ar21.png', link: 'brand/apple' },
  { id: 'samsung', name: 'Samsung', logo: 'https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo-2.png', link: 'brand/samsung' },
  { id: 'sony', name: 'Sony', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png', link: 'brand/sony' },
  { id: 'dell', name: 'Dell', logo: 'https://1000logos.net/wp-content/uploads/2017/07/Dell-Logo-1989.jpg', link: 'brand/dell' },
  { id: 'nike', name: 'Nike', logo: 'https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png', link: 'brand/nike' }
];

export const categoryOptions = [
  { id: 'electronics', name: 'Electronics', icon: '/path/to/electronics-icon.png', link: 'category/electronics' },
  { id: 'appliances', name: 'Appliances', icon: '/path/to/appliances-icon.png', link: 'category/appliances' },
  { id: 'fashion', name: 'Fashion', icon: '/path/to/fashion-icon.png', link: 'category/fashion' },
  { id: 'sports', name: 'Sports', icon: '/path/to/sports-icon.png', link: 'category/sports' },
  { id: 'beauty', name: 'Beauty', icon: '/path/to/beauty-icon.png', link: 'category/beauty' }
];

export const productDetails = Array.from({ length: 300 }, (_, index) => ({
  id: `product${index + 1}`,
  name: `Product ${index + 1}`,
  brand: brandOptions[Math.floor(Math.random() * brandOptions.length)],
  category: categoryOptions[Math.floor(Math.random() * categoryOptions.length)],
  price: Math.floor(Math.random() * 1000) + 1,
  image: `https://picsum.photos/300/200?random=${index + 1}`,
  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,'
}));