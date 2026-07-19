function ContentArea({ children }) {
  return (
    <main className="flex-1 overflow-auto bg-slate-950 p-6">
      {children}
    </main>
  );
}

export default ContentArea;