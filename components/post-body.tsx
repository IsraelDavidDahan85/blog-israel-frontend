import styles from "./post-body.module.css";

export default function PostBody({ content }) {
  return (
    <div className="max-w-4xl mx-auto mr-3 ml-3">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
