import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DraftsOutlinedIcon from "@material-ui/icons/DraftsOutlined";
import "./styles.css";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import DeleteIcon from "@material-ui/icons/Delete";
import LaunchIcon from "@material-ui/icons/Launch";

export interface inboxProp {
  enabled?: boolean;
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
});

function createData(
  id: number,
  dataAtual: string,
  nome: string,
  assunto: string,
  descricao: string
) {
  return { id, dataAtual, nome, assunto, descricao };
}
const rows = [
  createData(
    1,
    "Seg, 13 Setembro",
    "João Silva",
    "Verificação de relatório",
    "Bom dia, poderia verificar..."
  ),
  createData(
    2,
    "Seg, 13 Setembro",
    "Margarida Sens",
    "Verificação de relatório",
    "Bom dia, poderia verificar..."
  ),
  createData(
    3,
    "Seg, 13 Setembro",
    "Eclair Adolph",
    "Verificação de relatório",
    "Bom dia, poderia verificar..."
  ),
  createData(
    4,
    "Seg, 13 Setembro",
    "Lucas Adone",
    "Verificação de relatório",
    "Bom dia, poderia verificar..."
  ),
  createData(
    5,
    "Seg, 13 Setembro",
    "James Audrey",
    "Verificação de relatório",
    "Bom dia, poderia verificar..."
  ),
];

export const CaixaDeEntrada: React.FC<inboxProp> = (enabled) => {
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });

  return (
    <div className="containerTableInbox">
      <div className="containerTitleInbox">
        <DraftsOutlinedIcon /> <h5>Caixa de entrada</h5>
      </div>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell align="left">Assunto</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell align="right">Opções</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.dataAtual}
                </TableCell>
                <TableCell>{row.nome}</TableCell>
                <TableCell align="justify">{row.assunto}</TableCell>
                <TableCell>{row.descricao}</TableCell>
                <TableCell align="right">
                  <DeleteIcon
                    style={{
                      marginLeft: "16px",
                      marginRight: "16px",
                      backgroundColor: "#FF1411",
                      border: "1px solid #ccc",
                      color: '#FEFEFE',
                      borderRadius: '4px',
                    }}
                  />
                  <LaunchIcon
                    style={{
                      marginLeft: "16px",
                      marginRight: "16px",
                      backgroundColor: "#1176FF",
                      color: '#FEFEFE',
                      border: "1px solid #ccc",
                      borderRadius: '4px',
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default CaixaDeEntrada;
