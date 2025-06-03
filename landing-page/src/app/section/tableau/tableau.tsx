import styles from "./tableau.module.scss";
import TableauFrame from "@/app/components/tableauFrame/tableauFrame";

export default function Tableau() {
  return (
    <section className={styles.table}>
      <div>
        <h3 className={styles.tableTitle}>Tableau Comparatif</h3>
        <table className={styles.tableComparaison}>
          <thead>
            <tr>
              <th>Fonctionnalité</th>
              <th>Shared Notes</th>
              <th>App 1</th>
              <th>App 2</th>
            </tr>
          </thead>
          <tbody>
            <TableauFrame
              feature="Accessibilité"
              sharednotes="✔️"
              app1="❌"
              app2="❌"
            />

            <TableauFrame
              feature="Accessibilité"
              sharednotes="✔️"
              app1="❌"
              app2="❌"
            />

            <TableauFrame
              feature="Accessibilité"
              sharednotes="✔️"
              app1="❌"
              app2="❌"
            />
          </tbody>
        </table>
        <div className={styles.conclusion}>
          Checklist. Une application pour créer, organiser et partager vos notes
          avec votre équipe, vos amis ou vos camarades de classe.
        </div>
      </div>
    </section>
  );
}
