import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Button title="Home" onPress={() => {}} />
        <Button title="Noticias" onPress={() => {}} />
        <Button title="Perfil" onPress={() => {}} />
      </View>
 
      {/* Middle Section */}
      <View style={styles.middleSection}>
        <ScrollView
        contentContainerStyle={styles.scrollContainer}>
          {/* Left Column */}
          <View style={styles.leftColumn}>
            <Text style={styles.headline}>Panico na Zona Sul</Text>
            <Image source={require('./assets/panico.jpg')}
            style={styles.image} />
            <Text>"Aqui é Racionais MC's, Ice Blue, Mano Brown, KLJay e eu EdyRock."
                  - E ai Mano Brown, certo?
                  - Certo não está né mano, e os inocentes quem os trará de volta?
                  - É... a nossa vida continua, e ai quem se importa?
                  - A sociedade sempre fecha as portas mesmo...
                  - E ai Ice Blue...
                  - PÂNICO...
                  Então quando o dia escurece
                  Só quem é de lá sabe o que acontece
                  Ao que me parece prevalece a ignorância
                  E nós estamos sós
                  Ninguém quer ouvir a nossa voz
                  Cheia de razões calibres em punho
                  Dificilmente um testemunho vai aparecer
                  E pode crer a verdade se omite
                  Pois quem garante o meu dia seguinte
                  Justiceiros são chamados por eles mesmos
                  Matam humilham e dão tiros a esmo
                  E a polícia não demonstra sequer vontade
                  De resolver ou apurar a verdade
                  Pois simplesmente é conveniente
                  E por que ajudariam se eles os julgam deliquentes
                  E as ocorrências prosseguem sem problema nenhum
                  Continua-se o pânico na Zona Sul.
                  Pânico na Zona Sul
                  Pânico...
                  Eu não sei se eles
                  Estão ou não autorizados
                  De decidir que é certo ou errado
                  Inocente ou culpado retrato falado
                  Não existe mais justiça ou estou enganado?
                  Se eu fosse citar o nome de todos que se foram
                  O meu tempo não daria pra falar MAIS...
                  Eu vou lembrar que ficou por isso mesmo
                  E então que segurança se tem em tal situação
                  Quantos terão que sofrer pra se tomar providência
                  Ou vão dar mais algum tempo e assistir a sequência
                  E com certeza ignorar a procedência
                  O sensacionalismo pra eles é o máximo
                  Acabar com delinquentes eles acham ótimo
                  Desde que nenhum parente ou então é lógico
                  Seus próprios filhos sejam os próximos
                  E é por isso que
                  Nós estamos aqui
                  E ai mano Ice Blue...
                  Pânico na Sona Sul
                  Pânico...
                  Racionais vão contar
                  A realidade das ruas
                  Que não media outras vidas
                  A minha e a sua
                  Viemos falar
                  Que pra mudar
                  Temos que parar de se acomodar
                  E acatar o que nos prejudica
                  O medo
                  Sentimento em comum num lugar
                  Que parece sempre estar esquecido
                  Desconfiança insegurança mano
                  Pois já se tem a consciência do perigo
                  E ai?
                  Mal te conhecem consideram inimigo
                  E se você der o azar de apenas ser parecido
                  Eu te garanto que não vai ser divertido
                  Se julgam homens da lei
                  Mas à respeito eu não sei
                  Muito cuidado eu terei
                  Scracth KLJay
                  Eu não serei mais um porque estou esperto
                  Do que acontece Ice Blue
                  Pânico na Zona Sul
                  Pânico na Zona Sul
                  Pânico...
                  Ei Brown
                  Você acha que o problema acabou?
                  Pelo contrário ele apenas começou
                  Não perceberam que agora se tornaram iguais
                  Se inverteram e também são marginais Mas...
                  Terão que ser perseguidos e esclarecidos
                  Tudo e todos até o último indivíduo
                  Porém se nos querermos que as coisas mudem
                  Ei Brown qual será a nossa atitude?
                  A mudança estará em nossa consciência
                  Praticando nossos atos com coêrencia
                  E a consequência será o fim do próprio medo
                  Pois quem gosta de nós somos nós mesmos
                  Tipo porque ninguém cuidará de você
                  Não entre nessa a toa
                  Não de motivo pra morrer
                  Honestidade nunca será demais
                  Sua moral não se ganha, se faz
                  Não somos donos da verdade
                  Porém não mentimos
                  Sentimos a necessidade de uma melhoria
                  A nossa filosofia é sempre transmitir
                  A realidade em si
                  Racionais MC's
                  Pânico na Zona Sul
                  Pânico...
                  Certo, certo... Então irmão
                  Volte a atenção pra você mesmo
                  E pense como você tem vivido até hoje certo?
                  Quem gosta de você é você mesmo
                  Nós somos Racionais MC's
                  DJ KLJay, Ice Blue, Edy Rock e eu... Brown.
                  PAZ...
                  Pânico...
            </Text>
          </View>
 
          {/* Right Column */}
          <View style={styles.rightColumn}>
            <Text style={styles.subHeadline}>BLoquinhos atrapalham as aulas da FIAP</Text>
            <Text>Os bloquinhos de Carnaval em São Paulo são uma tradição que atrai multidões, trazendo alegria, música e muita festa para as ruas da cidade. No entanto, essa animação toda pode gerar desafios para quem precisa manter a rotina normal de estudos e trabalho, como os alunos da FIAP.</Text>
            <Text style={[styles.subHeadline, styles.marginTop]}>Realidade imita a ficção: Estado de saúde do Papa levanta paralelos com o filme Conclave</Text>
            <Text>A recente piora na saúde do Papa tem gerado comparações com o filme Conclave, que retrata os bastidores da sucessão papal em meio a intrigas e disputas de poder no Vaticano. Assim como na obra de ficção, a possibilidade de um novo conclave gera especulações sobre os próximos passos da Igreja Católica e seus possíveis sucessores. Enquanto o mundo acompanha apreensivo, a vida parece recriar o enredo do cinema, trazendo à tona as complexas dinâmicas do Vaticano diante de um momento decisivo.</Text>
          </View>
        </ScrollView>
      </View>
 
      {/* Bottom Navbar */}
      <View style={styles.bottomBar}>
        <Button title="Home" onPress={() => {}} />
        <Button title="Favorites" onPress={() => {}} />
        <Button title="Settings" onPress={() => {}} />
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'blue',
  },
  middleSection: {
    flex: 1,
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  leftColumn: {
    flex: 1,
    padding: 10,
  },
  rightColumn: {
    flex: 1,
    padding: 10,
  },
  headline: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subHeadline: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
  marginTop: {
    marginTop: 10,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'blue',
  },
});
 
export default App;