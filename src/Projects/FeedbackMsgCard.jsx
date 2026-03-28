function FeedbackMsgCard({ content, isError }) {
  return (
    <div className={`Project10feedbackCard${isError ? " error" : ""}`}>
      <p>{content}</p>
    </div>
  );
}
export default FeedbackMsgCard;
