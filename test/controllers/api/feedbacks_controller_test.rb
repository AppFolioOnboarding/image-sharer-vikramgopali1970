require 'test_helper'

class FeedbacksControllerTest < ActionDispatch::IntegrationTest
  def test_create__check_for_the_correct_response_for_feedback
    post api_feedbacks_path, params: { feedback: { name: 'vikram', comments: 'gopali' } }
    json_response = JSON.parse(response.body)
    assert_equal 'Feedback received. Thank you..!!', json_response['data']
    assert_equal 'success', json_response['type']
  end

  def test_create__check_for_the_incorrect_response_for_feedback
    post api_feedbacks_path, params: { feedback: { name: '', comments: '' } }
    json_response = JSON.parse(response.body)
    assert_equal 'Both fields required', json_response['data']
    assert_equal 'danger', json_response['type']
  end
end
