class FeedbackForm {
  private feedbackTextarea: HTMLTextAreaElement;
  private submitButton: HTMLButtonElement;
  private successMessage: HTMLElement;

  constructor() {
    this.feedbackTextarea = document.getElementById("feedback") as HTMLTextAreaElement;
    this.submitButton = document.getElementById("submitFeedback") as HTMLButtonElement;
    this.successMessage = document.getElementById("successMessage") as HTMLElement;

    if (this.feedbackTextarea && this.submitButton && this.successMessage) {
      this.submitButton.addEventListener("click", this.handleSubmit.bind(this));
    } else {
      console.error("Textarea, submit button, or success message element not found.");
    }
  }

  private handleSubmit(event: Event): void {
    event.preventDefault(); // Prevent form submission

    const feedback: string = this.feedbackTextarea.value.trim();

    if (feedback !== '') {
      // Display the success message
      this.successMessage.style.display = "block";

      // Clear the feedback textarea after a delay
      setTimeout(() => {
        this.successMessage.style.display = "none";
        this.feedbackTextarea.value = '';
      }, 10000); // 3 seconds delay
    } else {
      alert("Please enter your feedback before submitting.");
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  new FeedbackForm();
});
