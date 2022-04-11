import "./styles.css";

const History = ({ data, backgroundColor }) => {
  return (
    <>
      {!!data.length && (
        <section>
          <h4>Cores Geradas</h4>

          <ul>
            {data.map((rgb) => (
              <li key={rgb.join()}>
                <div
                  className="small-preview"
                  style={{ backgroundColor: backgroundColor(...rgb) }}
                ></div>
                {rgb.join(". ")}
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default History;
