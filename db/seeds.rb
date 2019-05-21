# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

img_urls = ['https://picsum.photos/id/1010/5184/3456', 'https://picsum.photos/id/101/2621/1747',
            'https://picsum.photos/id/1009/5000/7502', 'https://picsum.photos/id/1008/5616/3744',
            'https://picsum.photos/id/1006/3000/2000', 'https://picsum.photos/id/1005/5760/3840',
            'https://picsum.photos/id/1004/5616/3744', 'https://picsum.photos/id/1003/1181/1772',
            'https://picsum.photos/id/1002/4312/2868', 'https://picsum.photos/id/1001/5616/3744',
            'https://picsum.photos/id/1000/5626/3635', 'https://picsum.photos/id/100/2500/1656',
            'https://picsum.photos/id/1/5616/3744', 'https://picsum.photos/id/870/200/300?grayscale&blur=2',
            'https://picsum.photos/200/300/?blur=2', 'https://picsum.photos/200/300/?blur',
            'https://picsum.photos/200/300?grayscale', 'https://picsum.photos/id/237/200/300',
            'https://picsum.photos/200', 'https://picsum.photos/id/910/200/300']

img_urls.each do |img_src|
  Image.create(image_url: img_src)
end
