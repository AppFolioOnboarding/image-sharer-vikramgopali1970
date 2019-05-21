require 'test_helper'

class ImagesControllerTest < ActionDispatch::IntegrationTest
  def test_new__valid
    get '/images/new'
    assert_select 'h1', 'Enter the image url to save and view'
    assert_select 'label', 'Image URL'
  end

  def test_create__valid_url
    assert_difference('Image.count') do
      post images_url, params: { image: { image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTf3
RyZZVjGm23hkH1Lp1xndGGSkv6OlCkRtixg_f3siyp9UAY' } }
    end
    assert_redirected_to image_path(Image.last)
  end

  def test_create__blank_url
    post images_path, params: { image: { image_url: '' } }
    assert_response :ok
    assert_select 'h7', '2 errors prohibited this image from being saved'
    assert_select 'li', 'Image url is invalid'
    assert_select 'li', "Image url can't be blank"
  end

  def test_create__invalid_url
    post images_path, params: { image: { image_url: 'httncrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTf3Ry
                                                  ZZVjGm23hkH1Lp1xndGGSkv6OlCkRtixg_f3siyp9UAY' } }
    assert_response :ok
    assert_select 'h7', '1 error prohibited this image from being saved'
    assert_select 'li', 'Image url is invalid'
  end

  def test_show__valid
    Image.create!(image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTf3
RyZZVjGm23hkH1Lp1xndGGSkv6OlCkRtixg_f3siyp9UAY')
    image = Image.last
    get image_path(image.id)
    assert_response :ok
    assert_select 'label', 'The image is :'
  end

  def test_index__images_in_newest_first_order
    urls = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDfTyM82Txl7p2ghgko3GkPQjlA8SPZ5MhxBC7042O-CGyrm-Y',
            'https://makeoffices.com/wp-content/uploads/2016/10/MakeOffices-Bethesda-Bullpen.jpg']
    Image.create(image_url: urls[0])
    Image.create(image_url: urls[1])
    get root_url
    assert_response :ok
    assert_select 'h1', 'Images List'
    images = assert_select 'img'
    assert_equal urls[1], images.first[:src]
    assert_equal urls[0], images.last[:src]
    assert_equal '400', images.first[:width]
    assert_equal '400', images.last[:width]
  end
end
