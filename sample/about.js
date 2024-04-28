var FeedbackForm = /** @class */ (function () {
    function FeedbackForm() {
        this.feedbackTextarea = document.getElementById("feedback");
        this.submitButton = document.getElementById("submitFeedback");
        this.successMessage = document.getElementById("successMessage");
        if (this.feedbackTextarea && this.submitButton && this.successMessage) {
            this.submitButton.addEventListener("click", this.handleSubmit.bind(this));
        }
        else {
            console.error("Textarea, submit button, or success message element not found.");
        }
    }
    FeedbackForm.prototype.handleSubmit = function (event) {
        var _this = this;
        event.preventDefault(); // Prevent form submission
        var feedback = this.feedbackTextarea.value.trim();
        if (feedback !== '') {
            // Display the success message
            this.successMessage.style.display = "block";
            // Clear the feedback textarea after a delay
            setTimeout(function () {
                _this.successMessage.style.display = "none";
                _this.feedbackTextarea.value = '';
            }, 10000); // 3 seconds delay
        }
        else {
            alert("Please enter your feedback before submitting.");
        }
    };
    return FeedbackForm;
}());
document.addEventListener("DOMContentLoaded", function () {
    new FeedbackForm();
});
