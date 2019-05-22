require 'test_helper'

class ApplicationControllerTest < ActionDispatch::IntegrationTest
  def test__home_page
    get root_url
    assert_response :success
  end

  def test__navbar_present_at_home_page
    get root_url
    assert_response :ok
    assert_select '#navigation-header'
  end

  def test__footer_present_at_home_page
    get root_path
    assert_response :ok
    assert_select '#sticky-footer'
  end
end
