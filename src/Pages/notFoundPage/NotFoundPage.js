const styles = {
    container: {
      minHeight: 'calc(100vh - 50px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 500,
      fontSize: 42,
      textAlign: 'center',
    },
  };
  
  export default function NotFoundPage() {
    return (
      <div style={styles.container}>
        <h1
          style={{
            textAlign: ' center',
            fontSize: 48,
          }}
        >
          Error 404. Page not found
        </h1>
      </div>
    );
  }